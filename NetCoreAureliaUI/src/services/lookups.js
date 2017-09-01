define(["require", "exports", "./entity-manager-factory", "breeze-client"], function (require, exports, entity_manager_factory_1, breeze) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var customersQuery = new breeze.EntityQuery()
        .from('Customers')
        .select('CustomerID, CompanyName')
        .orderBy('CompanyName');
    var productsQuery = new breeze.EntityQuery()
        .from('Products')
        .select('ProductID, ProductName, UnitPrice')
        .orderBy('ProductName');
    var Lookups = (function () {
        function Lookups() {
        }
        Lookups.prototype.load = function () {
            var _this = this;
            return entity_manager_factory_1.createEntityManager()
                .then(function (em) { return Promise.all([em.executeQuery(customersQuery), em.executeQuery(productsQuery)]); })
                .then(function (queryResults) {
                _this.customers = queryResults[0].results;
                _this.products = queryResults[1].results;
            });
        };
        return Lookups;
    }());
    exports.Lookups = Lookups;
});
//# sourceMappingURL=lookups.js.map