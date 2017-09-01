import * as breeze from 'breeze-client';
import { AppRouter } from 'aurelia-router';

import settings from '../../settings';
import { IService } from '../../services/index';

export class ListViewModel {
    router: AppRouter;
    routeName : string;
    service: IService;
    entities: breeze.Entity[] = [];
    pageSize = settings.pageSize;
    pageCount = 0;
    pageIndex = 0;
    isLoading = false;

    constructor(routeName: string, router: AppRouter, service) {
        this.routeName = routeName;
        this.router = router;
        this.service = service;
    }

    activate() {
        this.load();
    }

    load() {
        this.isLoading = true;
        this.service.getPage(this.pageIndex)
            .then(result => {
                this.entities = result.entities;
                this.pageCount = result.pageCount;
                this.isLoading = false;
            });
    }

    setPage(index) {
        this.pageIndex = index;
        this.load();
    }

    open(id) {
        this.router.navigate(this.routeName + '/' + id);
    }
}
