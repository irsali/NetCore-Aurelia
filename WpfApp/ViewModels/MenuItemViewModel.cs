using Caliburn.Micro;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfApp.ViewModels
{
    public class MenuItemViewModel : Screen
    {

        public MenuItemViewModel(string title,  Type viewModel) {
            this.Title = title;
            this.ViewModel = viewModel;
        }

        public string Title { get; }

        public Type ViewModel { get; }
    }
}
