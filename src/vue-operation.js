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
    }
};
