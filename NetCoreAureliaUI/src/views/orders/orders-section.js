define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OrdersSection = (function () {
        function OrdersSection() {
        }
        OrdersSection.prototype.configureRouter = function (config, router) {
            config.map([
                { route: '', moduleId: './order-list', nav: false, title: '' },
                { route: ':id', moduleId: './order', nav: false, title: '' },
            ]);
        };
        return OrdersSection;
    }());
    exports.OrdersSection = OrdersSection;
});
//# sourceMappingURL=orders-section.js.map