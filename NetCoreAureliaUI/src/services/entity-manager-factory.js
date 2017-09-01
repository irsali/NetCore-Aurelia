define(["require", "exports", "../settings", "breeze-client"], function (require, exports, settings_1, breeze) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var entityManager;
    function createEntityManager() {
        if (entityManager) {
            return Promise.resolve(copyEntityManager());
        }
        entityManager = new breeze.EntityManager(settings_1.default.serviceName);
        return entityManager.fetchMetadata()
            .then(function () { return copyEntityManager(); });
    }
    exports.createEntityManager = createEntityManager;
    function copyEntityManager() {
        var copy = entityManager.createEmptyCopy();
        copy.entityChanged.subscribe(logChanges);
        return copy;
    }
    function logChanges(data) {
        var message = 'Entity Changed.  Entity: ' + (data.entity ? data.entity.entityType.name + '/' + data.entity.entityAspect.getKey().toString() : '?') + ';  EntityAction: ' + data.entityAction.getName() + '; ';
        if (data.entityAction === breeze.EntityAction.PropertyChange) {
            var pcArgs = data.args;
            message += 'PropertyName: ' + (pcArgs.propertyName || 'null') + '; Old Value: ' + (pcArgs.oldValue ? pcArgs.oldValue.toString() : 'null') + '; New Value: ' + (pcArgs.newValue ? pcArgs.newValue.toString() : 'null') + ';';
        }
        if (data.entityAction === breeze.EntityAction.EntityStateChange) {
            message += 'New State: ' + data.entity.entityAspect.entityState.getName() + ';';
        }
        console.log(message);
    }
    ;
});
//# sourceMappingURL=entity-manager-factory.js.map