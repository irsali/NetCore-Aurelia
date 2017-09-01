define(["require", "exports", "jquery"], function (require, exports, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Practice = (function () {
        function Practice() {
            this.listViewSettings = { width: 300, selectedItemIndex: 0 };
        }
        Practice.prototype.headChange = function (e) {
            console.log(e);
            console.log($);
            $('#butdrawer').parent().children('h2').text($(e.target).text());
        };
        return Practice;
    }());
    exports.Practice = Practice;
});
//# sourceMappingURL=drawer.js.map