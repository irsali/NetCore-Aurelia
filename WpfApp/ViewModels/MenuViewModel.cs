using Caliburn.Micro;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Controls;

namespace WpfApp.ViewModels
{
    public class MenuViewModel : Screen
    {
        private INavigationService navigationService;

        // For design time assistance
        public MenuViewModel() {
            MenuItems = new BindableCollection<MenuItemViewModel>
            {
                new MenuItemViewModel("First Form", typeof(FirstFormViewModel)),
                new MenuItemViewModel("Second Form", typeof(SecondFormViewModel)),
                new MenuItemViewModel("Third Form", typeof(ThirdFormViewModel)),
                new MenuItemViewModel("Fourth Form", typeof(FourthFormViewModel)),
                new MenuItemViewModel("Fifth Form", typeof(FifthFormViewModel)),
                new MenuItemViewModel("Sixth Form", typeof(SixthFormViewModel)),
            };
        }

        public MenuViewModel(INavigationService navigationService)
        {
            this.navigationService = navigationService;
            MenuItems = new BindableCollection<MenuItemViewModel>
            {
                new MenuItemViewModel("First Form", typeof(FirstFormViewModel)),
                new MenuItemViewModel("Second Form", typeof(SecondFormViewModel)),
                new MenuItemViewModel("Third Form", typeof(ThirdFormViewModel)),
                new MenuItemViewModel("Fourth Form", typeof(FourthFormViewModel)),
                new MenuItemViewModel("Fifth Form", typeof(FifthFormViewModel)),
                new MenuItemViewModel("Sixth Form", typeof(SixthFormViewModel)),
                // Context Menus
                // Navigation
                // Window Manager
            };


        }
        public BindableCollection<MenuItemViewModel> MenuItems { get; }

        public void OnSelectMenuItem(MenuItemViewModel menuItem)
        {
            navigationService.NavigateToViewModel(menuItem.ViewModel);
        }

        public void ChangeTheme()
        {
            var theme = MahApps.Metro.ThemeManager.DetectAppStyle(App.Current);

            // check existing theme then revert from dark to light and vice versa.
            if (theme.Item1.Name == "BaseDark")
            {
                MahApps.Metro.ThemeManager.ChangeAppTheme(App.Current, "BaseLight");
            }
            else
            {
                MahApps.Metro.ThemeManager.ChangeAppTheme(App.Current, "BaseDark"); // Or "BaseLight"
            }
        }


    }



}

