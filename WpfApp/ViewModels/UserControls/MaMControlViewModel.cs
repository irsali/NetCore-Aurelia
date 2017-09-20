using Caliburn.Micro;
using Caliburn.Micro.Validation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Windows.Controls;
using System.Windows.Input;
using WpfApp.Models;

namespace WpfApp.ViewModels.UserControls
{
    public class MaMControlViewModel : ValidatingScreen
    {
        public MaMControlViewModel(FormField formField)
        {
            this.FormField = formField;
            AddValidationRule(() => FormField.Value).Condition(
                ()
                =>
                 FormField.Value == null || string.IsNullOrWhiteSpace( FormField.Value.ToString() )
                )
                .Message($"Please enter {FormField.Text}");
        }

        public FormField FormField { get; set; }

        public void ComboSelectionChanged(object formField, SelectionChangedEventArgs e)
        {
            if (e.AddedItems.Count == 0)
            {
                this.FormField.Value = null;
            }
            else if (e.AddedItems.Count == 1)
            {
                this.FormField.Value = ((dynamic)e.AddedItems[0]).Value;
            }
            else
            {

            }
            //this.FormField.Value = formField.Value;
        }

        // Allow number only via validating 
        public void NumberValidation(object sender, TextCompositionEventArgs e)
        {
            e.Handled = regex.IsMatch(e.Text);
        }

        private static Regex regex = new Regex("[^0-9]+");

    }
}
