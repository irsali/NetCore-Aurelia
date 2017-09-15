using Caliburn.Micro;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using WpfApp.Extensions;
using WpfApp.Models;
using WpfApp.Service;
using WpfApp.ViewModels.UserControls;

namespace WpfApp.ViewModels
{
    public class SecondFormViewModel : Screen
    {

        public SecondFormViewModel()
        {
            Fields = new BindableCollection<FormFieldViewModel>
            {
                new FormFieldViewModel( new FormField(){ Text = "First Name", Value="Irshad" } ),
                new FormFieldViewModel( new FormField(){ Text = "Middle Name" }),
                new FormFieldViewModel( new FormField(){ Text = "Last Name", Value="Ali" }),
                new FormFieldViewModel(  new FormField(){ Text = "Phone No", Value=790832 }),
                new FormFieldViewModel(  new FormField(){ Text = "Email", Value = "irs@ex.com" })
            };
        }

        public BindableCollection<FormFieldViewModel> Fields { get; }

        public void Save()
        {
            var s = new StringBuilder();

            foreach (var field in Fields)
            {
                s.Append($"{field.FormField.Text}: {field.FormField.Value} {Environment.NewLine}");
            }
            var screenData = LocalHostService.GetFormFieldData();
            MessageBox.Show(s.ToString(), "Message", MessageBoxButton.OK);
        }

    }
}
