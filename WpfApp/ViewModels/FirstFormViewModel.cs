using Caliburn.Micro;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using WpfApp.Extensions;

namespace WpfApp.ViewModels
{
    public class FirstFormViewModel : Screen
    {

        public FirstFormViewModel()
        {
        }

        string yourName;
        public string YourName
        {
            get { return yourName; }
            set { this.Set(ref yourName, value); }
        }

        string address;
        public string Address
        {
            get { return address; }
            set { this.Set(ref address, value); }
        }
        
        public void Save(string yourName, string address)
        {
            MessageBox.Show( $"Your Name : {yourName}{Environment.NewLine}Address : {address}", "You have entered:", MessageBoxButton.OK);
        }

        public bool CanSave(string yourName, string address) => (!string.IsNullOrWhiteSpace(yourName) && !string.IsNullOrWhiteSpace(address));

    }
}
