exports.seriesUpdate = function(label){
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
};

exports.updateType = function(type) {
    var chart = $('.charts-container').highcharts();
    var series = chart.series;
    for (var i in series) {
        series[i].update({
            type: type
        });
    }
};
