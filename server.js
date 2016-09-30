const express = require('express');
const fs = require('fs');
const readline = require('readline');
var app = module.exports = express();
app.all('/*/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});
app.get('/chart', function(req, res) {
    var filename = req.query.filename;
    var path = '/incoming/devlope/ringcharts/' + filename;
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            res.status(404);
        } else {
            res.status(200).send(data);
        }
    });
});
app.get('/search', function(req, res) {
    var array = [];
    var uuid = req.query.uuid;
    var time = req.query.time;
    var path = "/home/afd/sync/data/" + time + "/result.log";
    const rl = readline.createInterface({
        input: fs.createReadStream(path),
        output: process.stdout,
        terminal: false
    });

    rl
        .on('line', function(line) {
            var data = JSON.parse(line);
            if (data.uuid == uuid) {
                array.push(data);
            }
        })
        .on('close', function() {
            res.status(200).send(array);
        });
});
app.get('/region', function(req, res) {
    var time = req.query.time;
    var path = "/incoming/devlope/regionMaps/" + time + ".log";
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            res.status(404);
        } else {
            res.status(200).send(data);
        }
    });
});


app.get('/device', function(req, res) {
    var keyword = req.query.keyword;
    var date = req.query.time;
    var lastDate = new Date(+new Date() - 8 * 3600 * 1000).toISOString().substring(0, 10);
    var deviceFileName = '/incoming/devlope/device/' + lastDate + '.devices.log';
    var path = "/home/afd/sync/data/" + date + "/result.log";
    var deviceContent = fs.readFileSync(deviceFileName, 'utf8');
    var num = 0;
    var rl = readline.createInterface({
        input: fs.createReadStream(path),
        output: process.stdout,
        terminal: false
    });

    rl
        .on('line', function(line) {
            line = JSON.parse(line);
            if (line.type === 5 && line.key && line.key === keyword) {
                if (deviceContent.indexOf(line.uuid) < 0) {
                    num++;
                    deviceContent += line.uuid;
                }
            }
        })
        .on('close', function() {
            var obj = {};
            obj.num = num;
            res.status(200).send(JSON.stringify(obj));
        });
});

app.listen(8000);
