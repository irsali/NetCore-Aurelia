using Caliburn.Micro;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WpfApp.Models;

namespace WpfApp.ViewModels.UserControls
{
    public class MyControlViewModel : Screen
    {
        public MyControlViewModel(FormField formField)
        {
            this.FormField = formField;
        }

        public FormField FormField { get; set; }

        public void ComboSelectionChanged(dynamic formField)
        {
            this.FormField.Value = formField.Value;
        }
    }
}
