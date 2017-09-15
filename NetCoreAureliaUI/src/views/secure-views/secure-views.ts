import { autoinject } from 'aurelia-framework';
import { Redirect, Router, RouterConfiguration } from 'aurelia-router';

@autoinject()
export class SecureViews {
    configureRouter(config: RouterConfiguration, router: Router) {
        config.map([
            { route: '', moduleId: './secure-view', name: 'secure-view' },
            { route: 'login', moduleId: './login', name: 'login' },
        ]);
    }
}


