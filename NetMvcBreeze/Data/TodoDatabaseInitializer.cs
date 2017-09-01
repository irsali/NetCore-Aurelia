using NetMvcBreeze.Models;
using System;
using System.Data.Entity;

namespace NetMvcBreeze.Data
{
    // DEMONSTRATION/DEVELOPMENT ONLY
    public class TodoDatabaseInitializer : DropCreateDatabaseAlways<NetMvcBreezeContext> // re-creates every time the server starts
                                                                                 //DropCreateDatabaseIfModelChanges<TodosContext> 
    {
        protected override void Seed(NetMvcBreezeContext context)
        {
            SeedDatabase(context);
        }

        public static void SeedDatabase(NetMvcBreezeContext context)
        {
            _baseCreatedAtDate = new DateTime(2012, 8, 22, 9, 0, 0);

            var todos = new[] {
                // Description, IsDone, IsArchived
                CreateTodo("Food", true, true),
                CreateTodo("Water", true, true),
                CreateTodo("Shelter", true, true),
                CreateTodo("Bread", false, false),
                CreateTodo("Cheese", true, false),
                CreateTodo("Wine", false, false)
           };

            Array.ForEach(todos, t => context.TodoItems.Add(t));

            context.SaveChanges(); // Save 'em
        }

        private static TodoItem CreateTodo(
            string title, bool isDone, bool isArchived)
        {
            _baseCreatedAtDate = _baseCreatedAtDate.AddMinutes(1);
            return new TodoItem
            {
                CreatedAt = _baseCreatedAtDate,
                Title = title,
                Description = "Pre created",
                IsDone = isDone,
                IsArchived = isArchived
            };
        }

        private static DateTime _baseCreatedAtDate;

        public static void PurgeDatabase(NetMvcBreezeContext context)
        {
            var todos = context.TodoItems;
            foreach (var todoItem in todos)
            {
                todos.Remove(todoItem);
            }

            context.SaveChanges();
        }

    }


}