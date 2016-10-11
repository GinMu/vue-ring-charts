import vueOperation from './vue-operation';
import Vue from 'vue';
module.exports = {
    requestChartsData: function(current) {
        var self = current;
        var url = vueOperation.getUrl(self.route);
        self.$http.get(url, {
            params: {
                filename: self.items[self.selected].itemFile,
                lastTime: self.lastTime,
                currentTime: self.currentTime
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            emulateJSON: false
        }).then((response) => {
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
                        x: 10,
                        formatter: function() {
                            return vueOperation.convertToPercent(self.dataType, this.y);
                        }
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
                xDateFormat: '%Y-%m-%d %a',
                pointFormatter: function() {
                    var y = this.y;
                    var name = this.series.name;
                    var color = this.series.color;
                    return '<span style="color:' + color + ';">\u25CF</span>' + name + ':<b>' + vueOperation.convertToPercent(self.dataType, y) + '</b><br/>';
                }
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
    },
    requestMapsData: function(current) {
        var self = current;
        var url = vueOperation.getUrl(self.route);
        var time = self.currentTime;
        self.$http.get(url, {
            params: {
                time: time
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            emulateJSON: false
        }).then((response) => {
            var chart = {
                spacingBottom: 30
            };
            var tooltip = {
                formatter: function() {
                    return this.point.name + "设备数量:" + this.point.value;
                }
            };
            var credits = {
                enabled: false
            };
            var title = {
                text: '铃声大全各省用户分布图'
            };
            var legend = {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            };
            var colorAxis = {
                min: 0,
                minColor: '#E6E7E8',
                maxColor: '#005645',
                labels: {
                    style: {
                        "color": "red",
                        "fontWeight": "bold"
                    }
                }
            };
            var plotOptions = {
                map: {
                    states: {
                        hover: {
                            color: '#EEDD66'
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        allowOverlap: true
                    }
                }
            };
            var json = {};
            json.chart = chart;
            json.tooltip = tooltip;
            json.credits = credits;
            json.title = title;
            json.legend = legend;
            json.colorAxis = colorAxis;
            json.plotOptions = plotOptions;
            var region = Highcharts.geojson(Highcharts.maps['countries/cn/custom/cn-all-china']);
            var devices = JSON.parse(response.body);
            $.each(region, function(i) {
                this.value = devices[i];
            });
            var series = [{
                data: region,
                name: '中国',
                dataLabels: {
                    enabled: true,
                    format: '{point.properties.cn-name}'
                }
            }];
            json.series = series;
            $('.charts-container').highcharts('Map', json);
        }, (response) => {
            alert('没有相关文件');
        });
    },
    requestUUIDData: function(current) {
        var self = current;
        var url = vueOperation.getUrl(self.route);
        var time = self.currentTime;
        var uuid = self.uuid;
        self.$http.get(url, {
            params: {
                time: time,
                uuid: uuid
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            emulateJSON: false
        }).then((response) => {
            var data = JSON.parse(response.body);
            if (!data || data.length === 0) {
                alert('无相关记录');
                return;
            }
            var list = [];
            for (var i in data) {
                var li = vueOperation.getOperationType(data[i]);
                list.push(li);
            }
            self.ol = list.join('');
            // var listComponent = new Vue({
            //   template: list.join('')
            // });
            // listComponent.$mount().$appendTo('#ol_list');
        }, (response) => {
            alert('无相关记录');
        });
    },
    requestKeyWord: function(current) {
        var self = current;
        var url = vueOperation.getUrl(self.route);
        var time = self.currentTime;
        var keyword = self.keyword;
        self.$http.get(url, {
            params: {
                time: time,
                keyword: keyword,
                last: self.lastTime
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            emulateJSON: false
        }).then((response) => {
            var data = JSON.parse(response.body);
            self.num = data.num;
            self.success = true;
            var list = [];
            for (var item of data.arr) {
              var li = '<li>' + item.uuid + ' ' + item.region + '</li>';
              list.push(li);
            }
            self.ol = list.join('');
        }, (response) => {
            self.success = false;
            alert('查询出错');
        });
    },
    requestFeedback: function(current) {
        var self = current;
        var url = vueOperation.getUrl(self.route);
        var time = self.currentTime;
        var type = self.items[self.selected].itemType;
        self.$http.get(url, {
            params: {
                time: time,
                type: type
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            emulateJSON: false
        }).then((response) => {
            var data = JSON.parse(response.body);
            if (data.length === 0) {
              self.empty = true;
            } else {
              self.empty = false;
            }
            self.datas = data;
        }, (response) => {
            alert('查询出错');
        });
    }
};
