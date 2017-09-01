define(["require", "exports", "jquery"], function (require, exports, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SimpleForm = (function () {
        function SimpleForm() {
            this.skillSets = [
                { skill: 'ASP.NET' }, { skill: 'ActionScript' }, { skill: 'Basic' },
                { skill: 'C++' }, { skill: 'C#' }, { skill: 'dBase' }, { skill: 'Delphi' },
                { skill: 'ESPOL' }, { skill: 'F#' }, { skill: 'FoxPro' }, { skill: 'Java' },
                { skill: 'J#' }, { skill: 'Lisp' }, { skill: 'Logo' }, { skill: 'PHP' }
            ];
            this.fields = { text: 'skill' };
            this.checkBox = true;
            this.watermarkText = 'Select your skill';
            this.carList = [
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
            this.uploadFileUrl = 'http://mvc.syncfusion.com/Services/FileUpload/UploadBox/saveFiles';
            this.removeUploadedFileUrl = 'http://mvc.syncfusion.com/Services/FileUpload/UploadBox/removeFiles';
            this.dragAndDrop = true;
            this.multipleFiles = true;
            this.numericValue = 35;
            this.percentValue = 5;
            this.currencyValue = 500;
            this.mvalue = '4242422424';
            this.maskFormat = '99 999-99999';
            this.cwidth = '100%';
            this.dateValue = new Date();
        }
        SimpleForm.prototype.populateDropdown = function () {
            this.skillSetsTarget = $('#skillsets').data('ejDropDownList');
        };
        SimpleForm.prototype.addSkill = function () {
            var text = this.skillName;
            this.skillSets.push({ skill: text });
        };
        SimpleForm.prototype.onEnableDisable = function (event) {
            (event.detail.isChecked) ? this.skillSetsTarget.disable() : this.skillSetsTarget.enable();
        };
        SimpleForm.prototype.addfilter = function () {
            this.skillSetsTarget.option({ 'enableFilterSearch': true });
        };
        return SimpleForm;
    }());
    exports.SimpleForm = SimpleForm;
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
});
//# sourceMappingURL=simple-form.js.map