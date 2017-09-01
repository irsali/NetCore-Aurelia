import { IService } from '../../services/index';

export class EntityViewModel {

    service : IService;
    entityManager : breeze.EntityManager;
    entity : breeze.Entity;
    _lastPop: number; // last pop time time in number format if user has tried to move to other view but there is unsaved changes

    constructor(service: IService) {
        this.service = service;
    }

    activate(info) {
        var promise;

        // load or create the entity.
        if (info.id === 'new') {
            promise = this.service.createNew();
        } else {
            promise = this.service.loadExisting(info.id);
        }

        return promise.then(result => {
            this.entityManager = result.entityManager;
            this.entity = result.entity;
        });
    }

    // get called when moving away from this view, do whatever you wanna do before moving.
    // return true to move, false to stay on this view
    canDeactivate() {
        // permit navigating away from new entities.
        if (this.entity.entityAspect.entityState.isAdded()) {
            console.log('Add-new cancelled.', 2000);
            return true;
        }

        // disallow navigating away from modified entities.
        if (this.hasChanges) {
            // throttle the amount of toast we pop.
            if (!this._lastPop || +new Date() - this._lastPop > 2000) {
                this._lastPop = +new Date();
                console.log('Navigation cancelled.  Save your changes!', 2000);
            }
            return false;
        }

        // permit navigating away from unmodified entities.
        return true;
    }

    get hasChanges() {
        return this.entityManager.hasChanges();
    }

    save() {
        // fake save...
        this.entityManager.acceptChanges();
        console.log('Changes saved.', 2000)
    }

    revert() {
        this.entityManager.rejectChanges();
        console.log('Changes reverted.', 2000)

        // workaround Materialize datepicker binding timezone issue.
        if (this.hasChanges) {
            this.entityManager.rejectChanges();
        }
    }
}
