define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources([
            './attributes/go-to-route',
            "./elements/pager",
            "./value-converters/date-format",
            "./value-converters/number-format"
        ]);
    }
    exports.configure = configure;
});
//# sourceMappingURL=index.js.map