using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WpfApp.Models;
using WpfApp.Models.ScreenData;

namespace WpfApp.Service
{
    public class LocalHostService
    {
        public static ScreenData GetFormFieldData()
        {
            var client = new RestClient("http://localhost:64922/api/");

            var request = new RestRequest("Misc", Method.POST);

            var response = client.Execute(request);

            var content = response.Content;

            //var screenData = JsonConvert.DeserializeObject<ScreenData>(content);
            var screenData = ScreenConverter.FromJson(content);

            return screenData;
        }
    }


    

    //public class ScreenData
    //{
    //    public object[] fields { get; set; }
    //    public object[] fieldLists { get; set; }
    //    public object[] screenLinks { get; set; }
    //    public object[] screen { get; set; }
    //}
    
}
