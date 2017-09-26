using WpfApp.Views;
using Caliburn.Micro;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Data;
using System.Windows.Threading;
using WpfApp.Service;
using WpfApp.ViewModels;
using WpfApp.ViewModels.UserControls;

namespace WpfApp
{
    public class Bootstrapper : BootstrapperBase
    {
        private SimpleContainer container;
        private static IValueConverter boolToVisibilityConverter = new BooleanToVisibilityConverter();

        public Bootstrapper()
        {
            Initialize();
            LogManager.GetLog = t => new DebugLog(t);
        }

        protected override void Configure()
        {
            container = new SimpleContainer();

            container.Instance(container);

            container
                .Singleton<IWindowManager, WindowManager>()
                .Singleton<IEventAggregator, EventAggregator>();

            container
               .PerRequest<ShellViewModel>()
               .PerRequest<MenuViewModel>()
               .PerRequest<MenuItemViewModel>()
               .PerRequest<FirstFormViewModel>()
               .PerRequest<SecondFormViewModel>()
               .PerRequest<ThirdFormViewModel>()
               .PerRequest<FourthFormViewModel>()
               .PerRequest<FifthFormViewModel>()
               .PerRequest<SixthFormViewModel>()
               .PerRequest<IBusyService, DefaultBusyService>()
               .PerRequest<BusyViewModel>()
               ;

            // Setup ValueConverter
            var oldApplyConverterFunc = ConventionManager.ApplyValueConverter;

            ConventionManager.ApplyValueConverter = (binding, bindableProperty, property) => {
                if (bindableProperty == UIElement.VisibilityProperty && typeof(bool).IsAssignableFrom(property.PropertyType))
                    //                                ^^^^^^^           ^^^^^^
                    //                             Property in XAML     Property in view-model
                    binding.Converter = boolToVisibilityConverter;
                //                  ^^^^^^^^^^^^^^^^^^^^^^^^^
                //                 Our converter used here.

                // else we use the default converter
                else
                    oldApplyConverterFunc(binding, bindableProperty, property);

            };
        }

        protected override void OnStartup(object sender, StartupEventArgs e)
        {
            DisplayRootViewFor<ShellViewModel>();
        }

        protected override object GetInstance(Type service, string key)
        {
            return container.GetInstance(service, key);
        }

        protected override IEnumerable<object> GetAllInstances(Type service)
        {
            return container.GetAllInstances(service);
        }

        protected override void BuildUp(object instance)
        {
            container.BuildUp(instance);
        }

        protected override void OnUnhandledException(object sender, DispatcherUnhandledExceptionEventArgs e)
        {
            e.Handled = true;
            MessageBox.Show(e.Exception.Message, "An error as occurred", MessageBoxButton.OK);
        }
    }
}
