var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-dependency-injection", "../../services/index", "jquery"], function (require, exports, aurelia_dependency_injection_1, index_1, jquery_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OrderDetails = (function () {
        function OrderDetails(lookups) {
            var _this = this;
            this.productsIndex = {};
            this.detail = null;
            this.products = this.allProducts = lookups.products;
            this.products.forEach(function (p) { return _this.productsIndex[p.ProductID] = p; });
        }
        OrderDetails.prototype.activate = function (order) {
            this.order = order;
        };
        OrderDetails.prototype.addDetail = function () {
            this.detail = this.order.entityAspect.entityManager
                .createEntity('OrderDetail', { OrderID: this.order.OrderID, Quantity: 1 });
            this.openDetail();
        };
        OrderDetails.prototype.editDetail = function (detail) {
            this.detail = detail;
            this.openDetail();
        };
        OrderDetails.prototype.removeDetail = function (detail) {
            detail.entityAspect.setDeleted();
        };
        OrderDetails.prototype.detailPropertyChanged = function (args) {
            if (args.propertyName !== 'ProductID') {
                return;
            }
            var product = this.productsIndex[args.newValue];
            this.detail.UnitPrice = product ? product.UnitPrice : null;
        };
        OrderDetails.prototype.openDetail = function () {
            var _this = this;
            this._subscription = this.detail.entityAspect.propertyChanged.subscribe(function (args) { return _this.detailPropertyChanged(args); });
            this.products = this.allProducts
                .filter(function (p) { return _this.order.OrderDetails.filter(function (d) { return d.ProductID === p.ProductID && d !== _this.detail; }).length === 0; });
            jquery_1.default('#detail').openModal();
        };
        OrderDetails.prototype.closeDetail = function () {
            this.detail.entityAspect.propertyChanged.unsubscribe(this._subscription);
            jquery_1.default('#detail').closeModal();
        };
        OrderDetails.prototype.calculateDetailCost = function (detail) {
            return detail.Quantity * detail.UnitPrice * (1 - detail.Discount);
        };
        Object.defineProperty(OrderDetails.prototype, "detailTotal", {
            get: function () {
                return this.order.OrderDetails.map(this.calculateDetailCost).reduce(function (a, b) { return a + b; }, 0);
            },
            enumerable: true,
            configurable: true
        });
        return OrderDetails;
    }());
    OrderDetails = __decorate([
        aurelia_dependency_injection_1.inject(index_1.Lookups),
        __metadata("design:paramtypes", [Object])
    ], OrderDetails);
    exports.OrderDetails = OrderDetails;
    var DiscountValueConverter = (function () {
        function DiscountValueConverter() {
        }
        DiscountValueConverter.prototype.toView = function (value) {
            return value === null ? null : Math.floor(value * 100);
        };
        DiscountValueConverter.prototype.fromView = function (value) {
            value = +value;
            if (isNaN(value) || value >= 100) {
                return 0;
            }
            return (value / 100).toFixed(2);
        };
        return DiscountValueConverter;
    }());
    exports.DiscountValueConverter = DiscountValueConverter;
});
//# sourceMappingURL=order-details.js.map