module.exports = {
    seriesUpdate: function(label) {
        var chart = $('.charts-container').highcharts();
        var series = chart.series;
        for (var i in series) {
            series[i].update({
                dataLabels: {
                    enabled: label
                },
                enableMouseTracking: !label
            });
        }
    },
    updateType: function(type) {
        var chart = $('.charts-container').highcharts();
        var series = chart.series;
        for (var i in series) {
            series[i].update({
                type: type
            });
        }
    },
    getUrl: function(route) {
        var host = 'http://192.168.66.254:8000/';
        var url = host + route;
        return url;
    },
    convertToPercent: function(type, number) {
        if (type === "percent") {
            return number.toFixed(1) + '%';
        }
        return number;
    },
    getOperationType: function(list) {
        var html = '<li>';
        var type = list.type;
        switch (type) {
            case 0:
                html += '播放:' + list.name;
                break;
            case 1:
                html += '暂停:' + list.name;
                break;
            case 2:
                html += '点击设彩铃:' + list.name;
                break;
            case 3:
                html += '接收短信:' + list.name + '  tel:' + list.tel;
                break;
            case 4:
                html += '设置彩铃:' + list.name + '  tel:' + list.tel;
                break;
            case 5:
                html += '搜索:' + list.key;
                break;
            case 6:
                html += '页面:' + list.path;
                break;
            case 7:
                html += '程序升级:' + list.version;
                break;
            case 8:
                html += '点击appstore评论:';
                break;
            case 9:

                break;
            case 10:

                break;
            case 11:
                html += '获取随机码:' + list.name + '  tel:' + list.tel;
                break;
            case 12:
                html += '反馈信息:' + unescape(list.word) + '  tel:' + unescape(list.tel);
                break;
            case 13:
                html += '退订:' + list.tel;
                break;
            case 14:
                html += '记录地理位置:' + list.region;
                break;
            case 15:
                html += '记录手机空间';
                break;
            case 16:
                html += '下载铃声:' + list.name;
                break;
            default:
        }
        html += '</li>';
        return html;
    }
};
