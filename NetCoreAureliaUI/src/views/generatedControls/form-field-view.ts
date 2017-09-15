import { bindable, customElement } from 'aurelia-framework';
import { $ } from 'jquery';
import { ElementEnum, FieldIdentifiers, FormField } from '../../models/index';
import { BootstrapFormValidationRenderer } from '../../utils/bootstrap-form-validation-renderer';
import { log } from '../../utils/index';


@customElement('form-field-view')
export class FormFieldView {
    watermarkText = "Select";
    multiSelectShowCheckbox = true;
    cwidth = "100%";
    
    ElementEnum;
    @bindable field;
    
    constructor() {
        log.debug("constructor called");
        this.ElementEnum = ElementEnum;
    }
    

    fileSaveUrl = "http://mvc.syncfusion.com/Services/FileUpload/UploadBox/saveFiles";
    fileRemoveUrl = "http://mvc.syncfusion.com/Services/FileUpload/UploadBox/removeFiles";
    
}



