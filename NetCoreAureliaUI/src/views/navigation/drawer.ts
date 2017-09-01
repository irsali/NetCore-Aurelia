import * as $ from 'jquery';

export class Practice {

    listViewSettings;

    constructor() {
        this.listViewSettings = { width: 300, selectedItemIndex: 0 };
    }

    headChange(e) {
        console.log(e);
        console.log($);
        $('#butdrawer').parent().children('h2').text($(e.target).text());
    }
}
