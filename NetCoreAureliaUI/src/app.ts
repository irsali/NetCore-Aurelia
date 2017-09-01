import { autoinject } from 'aurelia-framework';
import { Redirect, Router, RouterConfiguration } from 'aurelia-router';

@autoinject()
export class App {

    message = 'Hello World!';

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Syncfusion';
        config.map([
            { route: 'practice', moduleId: 'views/practice', name: 'practice' },
            { route: 'iq-portal', moduleId: 'views/iq-portal', name: 'iq-portal' },
            { route: 'drawer', moduleId: 'views/navigation/drawer', name: 'drawer', title: 'Drawer' },
            { route: 'generatedControls/firstForm', moduleId: 'views/generatedControls/first-form', name: 'generatedControlsFirstForm', title: 'First Form' },
            { route: 'generatedControls/secondForm', moduleId: 'views/generatedControls/second-form', name: 'generatedControlsSecondForm', title: 'First Form' },

            { route: 'orders', moduleId: './views/orders/orders-section', name: 'orders', nav: true, title: 'Orders' },
            { route: 'customers', moduleId: './views/customers/customers-section', name: 'customers', nav: true, title: 'Customers' },
            { route: 'employees', moduleId: './views/employees/employees-section', name: 'employees', nav: true, title: 'Employees' },

            { route: 'charts', moduleId: './views/charts/charts', name: 'charts', title: 'Charts' },
            { route: 'charts-pie', moduleId: './views/charts/charts-pie', name: 'chartsPie', title: 'Pie Charts' },
            { route: 'charts-bar', moduleId: './views/charts/charts-bar', name: 'chartsBar', title: 'Bar Charts' },
            { route: 'charts-line', moduleId: './views/charts/charts-line', name: 'chartsLine', title: 'Line Charts' },
            { route: 'charts-column', moduleId: './views/charts/charts-column', name: 'chartsColumn', title: 'Column Charts' },

            { route: '', redirect: 'practice' }
        ]);

        //// 404 page
        //config.mapUnknownRoutes('views/not-found');

        //// Whenever navigation is rejected, it is redirected to a previous location. However in certain cases a previous location doesn't exist, e.g. when it happens as the first navigation after the startup of application. To handle this scenario, you can set up a fallback route.
        //config.fallbackRoute('views/not-found');
        
    }
    
}
