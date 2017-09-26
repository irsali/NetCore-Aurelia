using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfApp.Views
{
    /// <summary>
    /// Interaction logic for ShellView.xaml
    /// </summary>
    public partial class ShellView 
    {
        public ShellView()
        {
            InitializeComponent();
        }

        public void ChangeThemeInView(object sender, RoutedEventArgs e) {
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
