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
    var lastTime = req.query.lastTime;
    var currentTime = req.query.currentTime;
    var path = '/incoming/devlope/ringcharts/' + filename;
    var data = [];
    const rl = readline.createInterface({
        input: fs.createReadStream(path),
        output: process.stdout,
        terminal: false
    });

    rl
        .on('line', function(line) {
            if (line.indexOf('Day') >= 0) {
              data.push(line);
            } else {
              var date = line.substring(0,10);
              if (date.indexOf('/') >= 0) {
                date = date.split('/');
                date = date[2] + '-' + date[1] + '-' + date[0];
              }
              if (date >= lastTime && date <= currentTime) {
                data.push(line);
              }
            }
        })
        .on('close', function() {
            res.status(200).send(data.join('\n'));
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

    var lastDate = req.query.last;
    var deviceFileName = '/incoming/devlope/device/' + lastDate + '.devices.log';
    var path = "/home/afd/sync/data/" + date + "/result.log";
    var deviceContent = fs.readFileSync(deviceFileName, 'utf8');
    var num = 0;
    var arr = [];
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
                    arr.push(line);
                    deviceContent += line.uuid;
                }
            }
        })
        .on('close', function() {
            var obj = {};
            obj.num = num;
            obj.arr = arr;
            res.status(200).send(JSON.stringify(obj));
        });
});

app.get('/feedback', function(req, res) {
    var date = req.query.time;
    var type = req.query.type;
    var path = "/home/afd/sync/data/" + date + "/result.log";
    var arr = [];
    var rl = readline.createInterface({
        input: fs.createReadStream(path),
        output: process.stdout,
        terminal: false
    });

    rl
        .on('line', function(line) {
            line = JSON.parse(line);
            if (line.type == type) {
              arr.push(line);
            }
        })
        .on('close', function() {
            res.status(200).send(JSON.stringify(arr));
        });
});

app.listen(8000);
