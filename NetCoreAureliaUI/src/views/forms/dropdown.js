define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EjDDLCheckBox = (function () {
        function EjDDLCheckBox() {
            this.skillSet = [
                { skill: 'ASP.NET' }, { skill: 'ActionScript' }, { skill: 'Basic' },
                { skill: 'C++' }, { skill: 'C#' }, { skill: 'dBase' }, { skill: 'Delphi' },
                { skill: 'ESPOL' }, { skill: 'F#' }, { skill: 'FoxPro' }, { skill: 'Java' },
                { skill: 'J#' }, { skill: 'Lisp' }, { skill: 'Logo' }, { skill: 'PHP' }
            ];
            this.cwidht = '70%';
            this.fields = { text: 'skill' };
            this.dataSource = this.skillSet;
            this.checkBox = true;
            this.watermarkText = 'Select your skill';
        }
        return EjDDLCheckBox;
    }());
    exports.EjDDLCheckBox = EjDDLCheckBox;
});
//# sourceMappingURL=dropdown.js.map