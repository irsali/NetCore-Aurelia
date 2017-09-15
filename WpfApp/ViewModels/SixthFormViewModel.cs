using Caliburn.Micro;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using WpfApp.Models;
using WpfApp.Service;
using WpfApp.ViewModels.UserControls;

namespace WpfApp.ViewModels
{
   
    public class SixthFormViewModel : Screen
    {
        public SixthFormViewModel()
        {
            OnInit();

            Fields = new BindableCollection<SixthFormFieldViewModel>();

            foreach (var formField in formFields)
            {
                Fields.Add(new SixthFormFieldViewModel(formField));
            }
        }

        List<string> fieldIdentifier;
        List<dynamic> fieldLists = new List<dynamic>();
        List<FormField> formFields = new List<FormField>();
        int posFieldId;
        int posFieldElementId;
        int posFieldName;
        int posFieldListId;
        int posFieldValue;
        int posFieldMaxLength;

        public BindableCollection<SixthFormFieldViewModel> Fields { get; }

        public void Save()
        {
            var s = new StringBuilder();

            foreach (var field in Fields)
            {
                s.Append($"{field.MaMControlViewModel.FormField.Text}: {field.MaMControlViewModel.FormField.Value} {Environment.NewLine}");
            }

            MessageBox.Show(s.ToString(), "Message", MessageBoxButton.OK);
        }

        void SetPositionOfFields()
        {
            if (this.fieldIdentifier != null)
            {
                this.posFieldId = this.fieldIdentifier.IndexOf(FieldIdentifiers.Id);
                this.posFieldName = this.fieldIdentifier.IndexOf(FieldIdentifiers.Name);
                this.posFieldValue = this.fieldIdentifier.IndexOf(FieldIdentifiers.Value);
                this.posFieldMaxLength = this.fieldIdentifier.IndexOf(FieldIdentifiers.MaxLength);
                this.posFieldElementId = this.fieldIdentifier.IndexOf(FieldIdentifiers.ElementId);
                this.posFieldListId = this.fieldIdentifier.IndexOf(FieldIdentifiers.ListId);
            }
            else
            {
                //('fieldIdentifier is not initailized');
            }

        }

        void OnInit()
        {

            var screenData = LocalHostService.GetFormFieldData();
            // Find field identifiers and their values array
            this.fieldIdentifier = screenData.Fields[0].Select(x => x.String).ToList();
            this.SetPositionOfFields();

            // read data for dropdowns
            foreach (var valObj in screenData.FieldLists[1])
            {
                var val = valObj.UnionArray;
                if (val != null)
                {
                    this.fieldLists.Add(new
                    {
                        Id = val[0],
                        Name = val[2],
                        Value = val[1] ?? val[2]
                    });
                }
            }

            foreach (var valObj in screenData.Fields[1])
            {
                var val = valObj.UnionArray;
                var formField = new FormField();
                formField.FieldId = Convert.ToInt32(val[this.posFieldId]);
                formField.ElementId = (ElementEnum)Convert.ToInt32(val[this.posFieldElementId]);
                formField.Text = Convert.ToString(val[this.posFieldName]);

                if (this.posFieldListId != 0)
                {
                    formField.List = this.fieldLists
                        .Where(v => v.Id == val[this.posFieldListId]).ToList();
                }

                if (this.posFieldValue > 0)
                {
                    formField.Value = val[this.posFieldValue];
                }

                if (this.posFieldMaxLength > 0 && val[this.posFieldMaxLength] != null)
                {
                    //try
                    //{
                    //    formField.validation.maxLength = parseInt(val[this.posFieldMaxLength]);
                    //}
                    //catch (e)
                    //{
                    //    throw "max length value:" + [this.posFieldMaxLength] + " is not parseable to integer for field name " + formField.text;
                    //}
                }

                this.formFields.Add(formField);
            }
        }
    }
}
