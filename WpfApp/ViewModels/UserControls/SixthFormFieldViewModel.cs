using Caliburn.Micro;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WpfApp.Models;

namespace WpfApp.ViewModels.UserControls
{

    public class SixthFormFieldViewModel 
    {
        public SixthFormFieldViewModel(FormField formField)
        {
            this.MaMControlViewModel = new MaMControlViewModel(formField);
            this.ElementName = formField.ElementId.ToString();

        }

        public MaMControlViewModel MaMControlViewModel { get; set; }

        public string ElementName { get; set; } = nameof(ElementEnum.InputBox);

    }
}
