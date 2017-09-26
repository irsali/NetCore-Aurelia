using Caliburn.Micro;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Controls;
using WpfApp.Models;

namespace WpfApp.ViewModels
{
    public class ShellViewModel : Screen
    {
        private readonly SimpleContainer container;
        private INavigationService navigationService;
        private readonly IEventAggregator eventAggregator;
        private static readonly ILog Log = LogManager.GetLog(typeof(ShellViewModel));

        public ShellViewModel(SimpleContainer container, IEventAggregator eventAggregator)
        {
            this.container = container;
            this.eventAggregator = eventAggregator;
        }

        public void RegisterFrame(Frame frame)
        {
            navigationService = new Caliburn.Micro.FrameAdapter(frame);

            container.Instance(navigationService);

            navigationService.NavigateToViewModel(typeof(MenuViewModel));
        }

        
    }
}
