import { Aurelia, LogManager } from 'aurelia-framework';
import { ConsoleAppender } from "aurelia-logging-console";
import { config } from 'breeze-client';

import environment from './environment';
import 'breeze-client/breeze.modelLibrary.backingStore';
import 'breeze-client/breeze.dataService.webApi';
import 'breeze-client/breeze.uriBuilder.json';

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .feature('resources')
        .plugin('aurelia-bootstrap', plugin => plugin.options.version = 4)
        .plugin('aurelia-syncfusion-bridge', plugin => plugin.useAll())
        .plugin('aurelia-breeze')
        .plugin('aurelia-resize')
        .plugin('aurelia-validation')
        .plugin('moment');

    if (environment.debug) {
        LogManager.addAppender(new ConsoleAppender());
        LogManager.setLevel(LogManager.logLevel.debug);
        //aurelia.use.developmentLogging();
    }

    if (environment.testing) {
        aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(() => {
        aurelia.setRoot();

    });
}
