define(["require", "exports", "aurelia-framework", "aurelia-logging-console", "./environment", "breeze-client/breeze.modelLibrary.backingStore", "breeze-client/breeze.dataService.webApi", "breeze-client/breeze.uriBuilder.json"], function (require, exports, aurelia_framework_1, aurelia_logging_console_1, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources')
            .plugin('aurelia-bootstrap', function (plugin) { return plugin.options.version = 4; })
            .plugin('aurelia-syncfusion-bridge', function (plugin) { return plugin.useAll(); })
            .plugin('aurelia-breeze')
            .plugin('aurelia-resize')
            .plugin('aurelia-validation')
            .plugin('moment');
        if (environment_1.default.debug) {
            aurelia_framework_1.LogManager.addAppender(new aurelia_logging_console_1.ConsoleAppender());
            aurelia_framework_1.LogManager.setLevel(aurelia_framework_1.LogManager.logLevel.debug);
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () {
            aurelia.setRoot();
        });
    }
    exports.configure = configure;
});
//# sourceMappingURL=main.js.map