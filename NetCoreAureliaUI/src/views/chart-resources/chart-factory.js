define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IChart;
    (function (IChart) {
        ;
    })(IChart = exports.IChart || (exports.IChart = {}));
    var Constants;
    (function (Constants) {
        var LabelPosition = (function () {
            function LabelPosition() {
            }
            return LabelPosition;
        }());
        LabelPosition.outsideExtended = 'outsideExtended';
        Constants.LabelPosition = LabelPosition;
        var ConnectorLineType = (function () {
            function ConnectorLineType() {
            }
            return ConnectorLineType;
        }());
        ConnectorLineType.bezier = 'bezier';
        Constants.ConnectorLineType = ConnectorLineType;
        var ChartType = (function () {
            function ChartType() {
            }
            return ChartType;
        }());
        ChartType.pie = 'pie';
        ChartType.bar = 'bar';
        ChartType.column = 'column';
        ChartType.line = 'line';
        Constants.ChartType = ChartType;
    })(Constants = exports.Constants || (exports.Constants = {}));
    var ChartDefaultControls = (function () {
        function ChartDefaultControls() {
        }
        return ChartDefaultControls;
    }());
    exports.ChartDefaultControls = ChartDefaultControls;
});
//# sourceMappingURL=chart-factory.js.map