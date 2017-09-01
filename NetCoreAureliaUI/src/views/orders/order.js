var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-dependency-injection", "../common/entity-view-model", "../../services/index"], function (require, exports, aurelia_dependency_injection_1, entity_view_model_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Order = (function (_super) {
        __extends(Order, _super);
        function Order(service, lookups) {
            var _this = _super.call(this, service) || this;
            _this.customers = lookups.customers;
            return _this;
        }
        Object.defineProperty(Order.prototype, "title", {
            get: function () {
                if (this.entity.OrderID <= 0) {
                    return 'New Order';
                }
                return "Order #" + this.entity.OrderID;
            },
            enumerable: true,
            configurable: true
        });
        return Order;
    }(entity_view_model_1.EntityViewModel));
    Order = __decorate([
        aurelia_dependency_injection_1.inject(index_1.OrderService, index_1.Lookups),
        __metadata("design:paramtypes", [Object, Object])
    ], Order);
    exports.Order = Order;
});
//# sourceMappingURL=order.js.map