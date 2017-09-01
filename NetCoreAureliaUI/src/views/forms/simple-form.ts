import * as $ from 'jquery';

export class SimpleForm {

    numericValue;
    percentValue;
    currencyValue;
    mvalue;
    maskFormat;
    dateValue;
    cwidth;

    constructor() {
        this.numericValue = 35;
        this.percentValue = 5;
        this.currencyValue = 500;
        this.mvalue = '4242422424';
        this.maskFormat = '99 999-99999';
        this.cwidth = '100%';
        this.dateValue = new Date();
    }


    // Dropdown features

    skillSets = [
        { skill: 'ASP.NET' }, { skill: 'ActionScript' }, { skill: 'Basic' },
        { skill: 'C++' }, { skill: 'C#' }, { skill: 'dBase' }, { skill: 'Delphi' },
        { skill: 'ESPOL' }, { skill: 'F#' }, { skill: 'FoxPro' }, { skill: 'Java' },
        { skill: 'J#' }, { skill: 'Lisp' }, { skill: 'Logo' }, { skill: 'PHP' }
    ];

    fields = { text: 'skill' };
    checkBox = true;
    watermarkText = 'Select your skill';
    skillSetsTarget;

    populateDropdown() {
        this.skillSetsTarget = $('#skillsets').data('ejDropDownList');
    }

    skillName;

    addSkill() {
        var text = this.skillName;
        this.skillSets.push({ skill: text });
    }

    onEnableDisable(event) {
        (event.detail.isChecked) ? this.skillSetsTarget.disable() : this.skillSetsTarget.enable();
    }

    addfilter() {
        this.skillSetsTarget.option({ 'enableFilterSearch': true })
    }

    // End Dropdown features

    // Autocomplete

    carList = [
        'Audi S6', 'Austin-Healey', 'Alfa Romeo', 'Aston Martin',
        'BMW 7', 'Bentley Mulsanne', 'Bugatti Veyron',
        'Chevrolet Camaro', 'Cadillac',
        'Duesenberg J', 'Dodge Sprinter',
        'Elantra', 'Excavator',
        'Ford Boss 302', 'Ferrari 360', 'Ford Thunderbird',
        'GAZ Siber',
        'Honda S2000', 'Hyundai Santro',
        'Isuzu Swift', 'Infiniti Skyline',
        'Jaguar XJS',
        'Kia Sedona EX', 'Koenigsegg Agera',
        'Lotus Esprit', 'Lamborghini Diablo',
        'Mercedes-Benz', 'Mercury Coupe', 'Maruti Alto 800',
        'Nissan Qashqai',
        'Oldsmobile S98', 'Opel Superboss',
        'Porsche 356', 'Pontiac Sunbird',
        'Scion SRS/SC/SD', 'Saab Sportcombi', 'Subaru Sambar', 'Suzuki Swift',
        'Triumph Spitfire', 'Toyota 2000GT',
        'Volvo P1800', 'Volkswagen Shirako'
    ];

    // End Autocomplete


    // File Upload

    uploadFileUrl = 'http://mvc.syncfusion.com/Services/FileUpload/UploadBox/saveFiles';
    removeUploadedFileUrl = 'http://mvc.syncfusion.com/Services/FileUpload/UploadBox/removeFiles';
    dragAndDrop = true;
    multipleFiles = true;
    
    // End Upload


}

document.addEventListener('dragover', function (event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'none';
    return false;
}, false);
document.addEventListener('drop', function (event) {
    event.dataTransfer.dropEffect = 'none';
    event.preventDefault();
    return false;
}, false);
