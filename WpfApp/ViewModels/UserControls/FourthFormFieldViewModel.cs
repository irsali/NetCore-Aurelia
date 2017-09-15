using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WpfApp.Models;

namespace WpfApp.ViewModels.UserControls
{
    public class FourthFormFieldViewModel : Caliburn.Micro.Screen
    {
        public FourthFormFieldViewModel(FormField formField) {

            this.MyControlViewModel = new MyControlViewModel( formField );

            this.ElementName = formField.ElementId.ToString();
              
        }

        public MyControlViewModel MyControlViewModel { get; set; }

        public string ElementName { get; set; } = nameof(ElementEnum.InputBox);

        
    }
}
