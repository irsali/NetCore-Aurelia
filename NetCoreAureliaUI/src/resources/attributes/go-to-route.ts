import { customAttribute, bindable, inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

// Example: Use go-to-route to navigate via url change. 
// <button class="btn btn-success" go-to-route="route: contacts;">Create New Contact</button>

@inject(Element, Router)
@customAttribute('go-to-route')
export class GoToRoute {

    @bindable route;
    @bindable params;

    constructor(private element, private router) {
        this.element = element;
        this.router = router;
    }

    attached() {
        this.element.addEventListener("click", () => {
            this.router.navigateToRoute(this.route, this.params);
        });
    }
}