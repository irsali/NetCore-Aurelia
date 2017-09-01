define(["require", "exports", "moment"], function (require, exports, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DateFormatValueConverter = (function () {
        function DateFormatValueConverter() {
        }
        DateFormatValueConverter.prototype.toView = function (value, format) {
            if (value === null)
                return '';
            return moment(value).format(format);
        };
        DateFormatValueConverter.prototype.fromView = function (value, format) {
            if (value === '')
                return null;
            return moment(value, format).toDate();
        };
        return DateFormatValueConverter;
    }());
    exports.DateFormatValueConverter = DateFormatValueConverter;
});
//# sourceMappingURL=date-format.js.map