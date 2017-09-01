import { FrameworkConfiguration } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {

    // add resources to global resource so that they are accessible directy everywhere in application
    config.globalResources([
        // attributes
        './attributes/go-to-route',

        // elements
        "./elements/pager",

        // value-converters
        "./value-converters/date-format",
        "./value-converters/number-format"
    ]);

}
