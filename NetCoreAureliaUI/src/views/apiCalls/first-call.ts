import { inject } from 'aurelia-dependency-injection';

import { EntityViewModel } from '../common/entity-view-model';
import { HttpService, createEntityManager } from '../../services/index';

@inject(HttpService)
export class FirstCall {

    constructor(private service: HttpService) {

    }

    metaData() {
        this.service
            .getString('http://localhost:64922/breeze/Todoes/Metadata')
            .then(x =>
                this.responseText = x
            )
            .catch(r => { console.log(r); this.responseText = r; });
    }

    getTodoes() {
        this.service
            .getJson('http://localhost:64922/api/TodoItems')
            .then(x =>
                this.gtodoes = JSON.stringify( x )
            )
            .catch(r => { console.log(r); this.gtodoes = JSON.stringify( r ); });
    }

    apiTodoes() {
        this.service
            .postJson('http://localhost:64922/breeze/TodoItems/PostTodoItem', { title: this.Title, Description: this.Description })
            .then(x =>
                this.todoes = x
            )
            .catch(r => { console.log(r); this.todoes = JSON.stringify( r ); });
    }

    deleteString(toDelete: string) {
        this[toDelete] = '';
    }

    responseText: string;
    todoes: string;
    gtodoes: string;

    Title;
    Description;
}
