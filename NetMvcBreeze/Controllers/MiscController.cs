using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Hosting;
using System.Web.Http;

namespace NetMvcBreeze.Controllers
{
    public class MiscController : ApiController
    {

        public IHttpActionResult FormFields()
        {
            using (StreamReader sr = new StreamReader(HostingEnvironment.MapPath("~/Data/refData.json")))
            {
                var jsonString = sr.ReadToEnd();
                var jObject = JObject.Parse(jsonString);
                return Ok(jObject);
            }
        }
    }
}
