define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PieChart = (function () {
        function PieChart() {
            this.commonSeriesOptions = { marker: { dataLabel: { visible: true, shape: 'none', textMappingName: 'text', connectorLine: { type: 'bezier', color: 'black' }, font: { size: '14px' } } }, border: { width: 2, color: 'white' }, name: 'Expenses', type: 'pie', enableAnimation: true, labelPosition: 'outsideExtended', enableSmartLabels: true, startAngle: 145 };
            this.size = { width: '900px', height: '550px' };
            this.title = { text: 'Expenditures' };
            this.legend = { visible: false };
            this.ExpendituresList = [{ xName: 'Other Personnal', yName: 94658, text: 'Other Personal,  88.47%' }, { xName: 'Medical care', yName: 9090, text: 'Medical care,  8.49%' }, { xName: 'Housing', yName: 2577, text: 'Housing,  2.40%' }, { xName: 'Transportation', yName: 473, text: 'Transportation,  0.44%' }, { xName: 'Education', yName: 120, text: 'Education,  0.11%' }, { xName: 'Electronics', yName: 70, text: 'Electronics,  0.06%' }];
        }
        PieChart.prototype.onchartload = function (sender) { };
        return PieChart;
    }());
    exports.PieChart = PieChart;
});
//# sourceMappingURL=charts-pie.js.map