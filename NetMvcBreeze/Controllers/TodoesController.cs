using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Breeze.WebApi2;
using Breeze.ContextProvider;
using Newtonsoft.Json.Linq;
using Breeze.ContextProvider.EF6;
using NetMvcBreeze.Data;
using System.Web.Http;
using NetMvcBreeze.Models;

namespace NetMvcBreeze.Controllers
{
    /// <summary>
    /// Api that exposes data from breeze client
    /// </summary>
    [BreezeController]
    //[RoutePrefix("breeze/Todoes")]
    public class TodoesController : ApiController
    {

        readonly EFContextProvider<NetMvcBreezeContext> _contextProvider =
        new EFContextProvider<NetMvcBreezeContext>();

        // ~/breeze/todoes/Metadata 
        [HttpGet]
        //[Route("Metadata")]
        public string Metadata()
        {
            return _contextProvider.Metadata();
        }

        // ~/breeze/todoes/Todoes
        // ~/breeze/todoes/Todoes?$filter=IsArchived eq false&$orderby=CreatedAt 
        [HttpGet]
        //[Route("Todoes")]
        public IQueryable<TodoItem> Todoes()
        {
            return _contextProvider.Context.TodoItems;
        }

        // ~/breeze/todoes/SaveChanges
        [HttpPost]
        //[Route("SaveChanges")]
        public SaveResult SaveChanges(JObject saveBundle)
        {
            return _contextProvider.SaveChanges(saveBundle);
        }

    }
}
