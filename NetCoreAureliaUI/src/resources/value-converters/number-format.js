define(["require", "exports", "numeral"], function (require, exports, numeral) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NumberFormatValueConverter = (function () {
        function NumberFormatValueConverter() {
        }
        NumberFormatValueConverter.prototype.toView = function (value, format) {
            if (value === null || value === undefined || isNaN(value)) {
                return null;
            }
            return numeral(value).format(format);
        };
        return NumberFormatValueConverter;
    }());
    exports.NumberFormatValueConverter = NumberFormatValueConverter;
});
//# sourceMappingURL=number-format.js.map