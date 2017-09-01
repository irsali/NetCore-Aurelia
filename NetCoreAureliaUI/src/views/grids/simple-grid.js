var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SimpleGrid = (function () {
        function SimpleGrid() {
            this.gridData = [{
                    OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5,
                    OrderDate: new Date(8364186e5), Freight: 32.38
                },
                {
                    OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6,
                    OrderDate: new Date(836505e6), Freight: 11.61
                },
                {
                    OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4,
                    OrderDate: new Date(8367642e5), Freight: 65.83
                },
                {
                    OrderID: 10251, CustomerID: 'VICTE', EmployeeID: 3,
                    OrderDate: new Date(8367642e5), Freight: 41.34
                },
                {
                    OrderID: 10252, CustomerID: 'SUPRD', EmployeeID: 4,
                    OrderDate: new Date(8368506e5), Freight: 51.3
                }];
        }
        SimpleGrid.prototype.recordClick = function (e) {
        };
        return SimpleGrid;
    }());
    SimpleGrid = __decorate([
        aurelia_framework_1.customElement('simple-grid'),
        __metadata("design:paramtypes", [])
    ], SimpleGrid);
    exports.SimpleGrid = SimpleGrid;
});
//# sourceMappingURL=simple-grid.js.map