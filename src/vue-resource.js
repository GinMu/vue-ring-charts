exports.ajax = function(current) {
    var self = current;
    self.$http.get('../ringcharts/' + self.items[self.selected].itemFile, {}, {
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        },
        emulateJSON: false
    }).then(function(response) {
        var title = {
            text: self.items[self.selected].itemName
        };
        var chart = {
            type: self.radios[self.checked].type
        };
        var xAxis = {
            endOnTick: true,
            type: 'datetime',
            startOnTick: true,
            dateTimeLabelFormats: {
                day: '%y/%m/%d'
            }
        };
        var yAxis = {
            endOnTick: true,
            gridLineColor: '#c0c0c0',
            gridLineDashStyle: 'longdash'
        };
        var plotOptions = {
            series: {
                dataLabels: {
                    enabled: self.dataLabels,
                    allowOverlap: true,
                    rotation: 350,
                    y: -15,
                    x: 10
                },
                enableMouseTracking: !self.dataLabels
            }
        };
        var credits = {
            enabled: false
        };
        var tooltip = {
            crosshairs: true,
            shared: true,
            xDateFormat: '%Y-%m-%d %a'
        };
        var legend = {
            y: 20
        };

        var json = {};
        json.title = title;
        json.chart = chart;
        json.xAxis = xAxis;
        json.yAxis = yAxis;
        json.credits = credits;
        json.tooltip = tooltip;
        json.plotOptions = plotOptions;
        json.legend = legend;
        var data = {
            csv: response.body
        };
        json.data = data;
        var chartsContainer = self.$el.querySelector('.charts-container');
        $(chartsContainer).highcharts(json);
    });
};
