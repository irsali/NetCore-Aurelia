using Caliburn.Micro;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Controls;
using WpfApp.Models;

namespace WpfApp.ViewModels.UserControls
{
    public class EjControlViewModel : Screen
    {
        public EjControlViewModel(FormField formField)
        {
            this.FormField = formField;
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

        public void DatePickerValueChanged(object formField, object e)
        {
            //if (e.AddedItems.Count == 0)
            //{
            //    this.FormField.Value = null;
            //}
            //else if (e.AddedItems.Count == 1)
            //{
            //    this.FormField.Value = ((dynamic)e.AddedItems[0]).Value;
            //}
            //else
            //{

            //}
            ////this.FormField.Value = formField.Value;
        }
     
        public string DateValue { get; set; }
    }
}
