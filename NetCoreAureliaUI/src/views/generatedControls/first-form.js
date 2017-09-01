define(["require", "exports", "./refData", "../../models/index"], function (require, exports, refData_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FirstForm = (function () {
        function FirstForm() {
            var _this = this;
            this.watermarkText = "Select";
            this.multiSelectShowCheckbox = true;
            this.cwidth = "100%";
            this.fullData = refData_1.RefData.fields;
            this.fieldIdentifier = this.fullData.fields[0];
            this.fieldValuesArr = this.fullData.fields[1];
            this.fields = { text: 'Name', value: 'Value' };
            var tempFieldLists = this.fullData.fieldLists[1];
            this.fieldLists = [];
            tempFieldLists.forEach(function (val, index, array) {
                _this.fieldLists.push({
                    'Id': val[0],
                    'Name': val[2],
                    'Value': val[1] || val[2]
                });
            });
            this.SetPositionOfFields();
            this.ElementEnum = index_1.ElementEnum;
        }
        FirstForm.prototype.filterDataForDropdown = function (listId) {
            return this.fieldLists.filter(function (v) {
                if (v['Id'] == listId) {
                    return true;
                }
            });
        };
        FirstForm.prototype.SetPositionOfFields = function () {
            if (this.fieldIdentifier) {
                this.posFieldId = this.fieldIdentifier.indexOf(index_1.FieldIdentifiers.Id);
                this.posFieldName = this.fieldIdentifier.indexOf(index_1.FieldIdentifiers.Name);
                this.posFieldMaxLength = this.fieldIdentifier.indexOf(index_1.FieldIdentifiers.MaxLength);
                this.posFieldElementId = this.fieldIdentifier.indexOf(index_1.FieldIdentifiers.ElementId);
                this.posFieldListId = this.fieldIdentifier.indexOf(index_1.FieldIdentifiers.ListId);
            }
            else {
                console.log('fieldIdentifier is not initailized');
            }
        };
        FirstForm.prototype.callDebugger = function () {
            debugger;
        };
        return FirstForm;
    }());
    exports.FirstForm = FirstForm;
});
//# sourceMappingURL=first-form.js.map