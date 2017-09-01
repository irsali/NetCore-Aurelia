define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BasicUse = (function () {
        function BasicUse() {
            this.CountriesList = [{ xName: 'USA', yName: 50, yName1: 70, yName2: 45 }, { xName: 'China', yName: 40, yName1: 60, yName2: 55 }, { xName: 'Japan', yName: 70, yName1: 60, yName2: 50 }];
            this.commonSeriesOptions = { type: 'column', enableAnimation: true, tooltip: { visible: true, format: '#point.x# :  #point.y#' } };
            this.size = { width: '900px', height: '550px' };
            this.title = { text: 'Olympic Medals' };
            this.legend = { visible: true, position: 'top' };
            this.primaryXAxis = { tickLinesPosition: 'inside', labelIntersectAction: 'hide' };
            this.primaryYAxis = { range: { min: 0, max: 80, interval: 20 } };
        }
        BasicUse.prototype.onchartload = function (sender) {
        };
        return BasicUse;
    }());
    exports.BasicUse = BasicUse;
});
//# sourceMappingURL=charts-column.js.map