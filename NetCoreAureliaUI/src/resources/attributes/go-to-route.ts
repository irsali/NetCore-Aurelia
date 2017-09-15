import { customAttribute, bindable, inject, autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

// Example: Use go-to-route to navigate via url change. 
// <button class="btn btn-success" go-to-route="route: contacts;">Create New Contact</button>

@autoinject()
@customAttribute('go-to-route')
export class GoToRoute {

    @bindable route;
    @bindable params;
    @bindable options;
    @bindable isRouteUrl: boolean; // on view write as is-route-url

    constructor(private element: Element, private router: Router) {
        this.element = element;
        this.router = router;
    }

    attached() {
        this.element.addEventListener("click", () => {
            if (this.isRouteUrl) {
                this.router.navigate(this.route, this.options);
            }
            else {
                this.router.navigateToRoute(this.route, this.params, this.options);
            }
        });
    }
}
