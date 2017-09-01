define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EntityViewModel = (function () {
        function EntityViewModel(service) {
            this.service = service;
        }
        EntityViewModel.prototype.activate = function (info) {
            var _this = this;
            var promise;
            if (info.id === 'new') {
                promise = this.service.createNew();
            }
            else {
                promise = this.service.loadExisting(info.id);
            }
            return promise.then(function (result) {
                _this.entityManager = result.entityManager;
                _this.entity = result.entity;
            });
        };
        EntityViewModel.prototype.canDeactivate = function () {
            if (this.entity.entityAspect.entityState.isAdded()) {
                console.log('Add-new cancelled.', 2000);
                return true;
            }
            if (this.hasChanges) {
                if (!this._lastPop || +new Date() - this._lastPop > 2000) {
                    this._lastPop = +new Date();
                    console.log('Navigation cancelled.  Save your changes!', 2000);
                }
                return false;
            }
            return true;
        };
        Object.defineProperty(EntityViewModel.prototype, "hasChanges", {
            get: function () {
                return this.entityManager.hasChanges();
            },
            enumerable: true,
            configurable: true
        });
        EntityViewModel.prototype.save = function () {
            this.entityManager.acceptChanges();
            console.log('Changes saved.', 2000);
        };
        EntityViewModel.prototype.revert = function () {
            this.entityManager.rejectChanges();
            console.log('Changes reverted.', 2000);
            if (this.hasChanges) {
                this.entityManager.rejectChanges();
            }
        };
        return EntityViewModel;
    }());
    exports.EntityViewModel = EntityViewModel;
});
//# sourceMappingURL=entity-view-model.js.map