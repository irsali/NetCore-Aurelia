import { $ } from 'jquery';

export class EjDDLCheckBox {
    skillSet = [
        { skill: 'ASP.NET' }, { skill: 'ActionScript' }, { skill: 'Basic' },
        { skill: 'C++' }, { skill: 'C#' }, { skill: 'dBase' }, { skill: 'Delphi' },
        { skill: 'ESPOL' }, { skill: 'F#' }, { skill: 'FoxPro' }, { skill: 'Java' },
        { skill: 'J#' }, { skill: 'Lisp' }, { skill: 'Logo' }, { skill: 'PHP' }
    ];

    cwidht = '70%';
    fields;
    dataSource; checkBox; watermarkText; target;
    constructor() {
        this.fields = { text: 'skill' };
        this.dataSource = this.skillSet;
        this.checkBox = true;
        this.watermarkText = 'Select your skill';
    }
        
}
