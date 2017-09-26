using Caliburn.Micro;
using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Markup;
using System.Windows.Media;

namespace WpfApp.Service
{
    public interface IBusyService
    {
        void MarkAsBusy(object sourceViewModel = null, object busyViewModel = null);
        void MarkAsNotBusy(object sourceViewModel = null);
    }


    [Export(typeof(IBusyService))]
    [PartCreationPolicy(CreationPolicy.Shared)]
    public class DefaultBusyService : IBusyService
    {
        private static readonly ILog Log = LogManager.GetLog(typeof(DefaultBusyService));
        public static string BusyIndicatorName = "busyIndicator";

        private class BusyInfo
        {
            public UIElement BusyIndicator { get; set; }
            public object BusyViewModel { get; set; }
            public int Depth { get; set; }
        }

        private readonly Dictionary<object, BusyInfo> loaders = new Dictionary<object, BusyInfo>();
        private readonly object lockObject = new object();
        private readonly object defaultKey = new object();
        private readonly IWindowManager windowManager;

        [ImportingConstructor]
        public DefaultBusyService(IWindowManager windowManager)
        {
            this.windowManager = windowManager;
        }

        public void MarkAsBusy(object sourceViewModel = null, object busyViewModel = null)
        {
            sourceViewModel = sourceViewModel ?? defaultKey;
            busyViewModel = busyViewModel ?? string.Empty;

            if (loaders.ContainsKey(sourceViewModel))
            {
                var info = loaders[sourceViewModel];
                info.BusyViewModel = busyViewModel;
                UpdateLoader(info);
            }
            else
            {
                var busyIndicator = TryFindBusyIndicator(sourceViewModel);
                if (busyIndicator == null)
                {
                    var activator = busyViewModel as IActivate;
                    if (activator == null)
                        return;

                    activator.Activated += (s, e) => {
                        var info = new BusyInfo { BusyViewModel = busyViewModel };
                        loaders[sourceViewModel] = info;
                        UpdateLoader(info);
                    };

                    Log.Warn("No busy indicator with name '" + BusyIndicatorName + "' was found in the UI hierarchy. Using modal.");
                    windowManager.ShowDialog(busyViewModel);
                }
                else
                {
                    var info = new BusyInfo { BusyIndicator = busyIndicator, BusyViewModel = busyViewModel };
                    loaders[sourceViewModel] = info;
                    ToggleBusyIndicator(info, true);
                    UpdateLoader(info);
                }
            }
        }

        public void MarkAsNotBusy(object sourceViewModel = null)
        {
            sourceViewModel = sourceViewModel ?? defaultKey;
            if (!loaders.ContainsKey(sourceViewModel)) return;

            var info = loaders[sourceViewModel];

            lock (lockObject)
            {
                info.Depth--;

                if (info.Depth == 0)
                {
                    loaders.Remove(sourceViewModel);
                    ToggleBusyIndicator(info, false);
                }
            }
        }

        private void UpdateLoader(BusyInfo info)
        {
            lock (lockObject)
            {
                info.Depth++;
            }

            if (info.BusyViewModel == null || info.BusyIndicator == null)
                return;

            var indicatorType = info.BusyIndicator.GetType();
            var property = indicatorType.GetProperty("BusyContent");

            if (property == null)
            {
                var attribute = indicatorType.GetAttributes<ContentPropertyAttribute>(true)
                    .FirstOrDefault();

                if (attribute == null)
                    return;

                property = indicatorType.GetProperty(attribute.Name);
            }

            object content = info.BusyViewModel;

            if (!(content is string))
            {
                content = ViewLocator.LocateForModel(info.BusyViewModel, null, null);
                ViewModelBinder.Bind(info.BusyViewModel, (DependencyObject)content, null);
            }

            property.SetValue(info.BusyIndicator, content, null);
        }

        private void ToggleBusyIndicator(BusyInfo info, bool isBusy)
        {
            if (info.BusyIndicator != null)
            {
                var busyProperty = info.BusyIndicator.GetType().GetProperty("IsBusy");
                if (busyProperty != null)
                    busyProperty.SetValue(info.BusyIndicator, isBusy, null);
                else info.BusyIndicator.Visibility = isBusy ? Visibility.Visible : Visibility.Collapsed;
            }
            else if (!isBusy)
            {
                var close = info.BusyViewModel.GetType().GetMethod("Close", Type.EmptyTypes);
                if (close != null)
                    close.Invoke(info.BusyViewModel, null);
            }
        }

        private UIElement TryFindBusyIndicator(object viewModel)
        {
            var view = GetView(viewModel);
            if (view == null)
            {
                Log.Warn("Could not find view for {0}.", viewModel);
                return null;
            }

            UIElement busyIndicator = null;

            while (view != null && busyIndicator == null)
            {
                busyIndicator = view.FindName(BusyIndicatorName) as UIElement;

                if (busyIndicator == null)
                    view = VisualTreeHelper.GetParent(view) as FrameworkElement;
            }

            return busyIndicator;
        }

        private FrameworkElement GetView(object viewModel)
        {
            var viewAware = viewModel as IViewAware;
            if (viewAware == null)
                return null;

            return viewAware.GetView() as FrameworkElement;
        }
    }


    public class Busy : IResult
    {
        readonly object busyModel;
        readonly bool makeBusy;

        [Import]
        public IBusyService BusyService { get; set; }

        public Busy(bool makeBusy, object busyModel)
        {
            this.makeBusy = makeBusy;
            this.busyModel = busyModel;
        }

        public Busy(bool makeBusy)
        {
            this.makeBusy = makeBusy;
        }

        public Busy()
        {
            makeBusy = true;
        }
        
        public void Execute(CoroutineExecutionContext context)
        {
            if (makeBusy)
                BusyService.MarkAsBusy(context.Target, busyModel);
            else BusyService.MarkAsNotBusy(context.Target);

            Completed(this, new ResultCompletionEventArgs());
        }

        public event EventHandler<ResultCompletionEventArgs> Completed = delegate { };
    }
}
