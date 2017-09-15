using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WpfApp.Models;

namespace WpfApp.ViewModels.UserControls
{
    public class FifthFormFieldViewModel : Caliburn.Micro.Screen
    {
        public FifthFormFieldViewModel(FormField formField)
        {

            this.EjControlViewModel = new EjControlViewModel(formField);

            this.ElementName = formField.ElementId.ToString();

        }

        public EjControlViewModel EjControlViewModel { get; set; }

        public string ElementName { get; set; } = nameof(ElementEnum.InputBox);


    }
}
