import { autoinject } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { $ } from 'jquery';

export class Practice {
    
    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Practice';
        config.map([
            { route: ['', 'simple-form'], moduleId: './forms/simple-form', name: 'simple-form', title: 'Simple Form' },
            { route: 'simple-grid', moduleId: './grids/simple-grid', name: 'simple-grid', title: 'Simple Grid' },
            { route: 'dropdown', moduleId: './forms/dropdown', name: 'dropdown', title: 'Dropdown' },
            { route: 'api-calls', moduleId: './apiCalls/first-call', name: 'api-calls', title: 'Api Calls', settings: { login: 'no-login' } }
            
        ]);

    }

}
