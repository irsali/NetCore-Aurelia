define(["require", "exports", "jquery"], function (require, exports, jquery_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Charts = (function () {
        function Charts() {
            this.titleText = 'Expenditures';
            this.isShowLegend = false;
            this.width = '900px';
            this.height = '550px';
            this.updateChartData();
            this.ExpendituresList = [{
                    xName: 'Other Personnal',
                    yName: 94658,
                    text: 'Other Personal,  88.47%'
                }, {
                    xName: 'Medical care',
                    yName: 9090,
                    text: 'Medical care,  8.49%'
                }, {
                    xName: 'Housing',
                    yName: 2577,
                    text: 'Housing,  2.40%'
                }, {
                    xName: 'Transportation',
                    yName: 473,
                    text: 'Transportation,  0.44%'
                }, {
                    xName: 'Education',
                    yName: 120,
                    text: 'Education,  0.11%'
                }, {
                    xName: 'Electronics',
                    yName: 70,
                    text: 'Electronics,  0.06%'
                }];
        }
        Charts.prototype.onchartload = function (sender) {
        };
        Charts.prototype.onContentResize = function (x) {
            this.contanierWidth = x.width;
            this.contanierHeight = x.height;
        };
        Charts.prototype.updateChartData = function () {
            this.title = { text: this.titleText };
            this.legend = { visible: this.isShowLegend };
            this.size = { width: this.width, height: this.height };
            this.commonSeriesOptions = { marker: { dataLabel: { visible: true, shape: 'none', textMappingName: 'text', connectorLine: { type: 'bezier', color: 'black' }, font: { size: '14px' } } }, border: { width: 2, color: 'white' }, name: 'Expenses', type: 'pie', enableAnimation: true, labelPosition: 'outsideExtended', enableSmartLabels: true, startAngle: 145 };
        };
        Charts.prototype.updateChart = function () {
            this.titleText = "New Expenditiure";
            this.legend.visible = true;
            this.updateChartData();
            this.commonSeriesOptions.labelPosition = 'outside';
            var chartObj = jquery_1.default("#container").data("ejChart");
            chartObj.redraw();
        };
        return Charts;
    }());
    exports.Charts = Charts;
});
//# sourceMappingURL=charts.js.map