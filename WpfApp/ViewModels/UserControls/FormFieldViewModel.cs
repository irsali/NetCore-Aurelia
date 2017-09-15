using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WpfApp.Models;

namespace WpfApp.ViewModels.UserControls
{
    public class FormFieldViewModel
    {
        public FormFieldViewModel(FormField formField) {
            this.FormField = formField;
            
        }

        public FormField FormField { get; set; }
    }
}
