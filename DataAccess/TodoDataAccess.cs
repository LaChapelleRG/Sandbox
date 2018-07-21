using Microsoft.EntityFrameworkCore;
using Sandbox.Models;
using System.Collections.Generic;
using System.Linq;

namespace Sandbox.DataAccess
{
    public class TodoDataAccess
    {
        public List<Todo> GetAll(SandboxContext db)
        {
            List<Todo> result = db.Todos.OrderBy(x => x.Sort).ToList();
            return result;
        }

        public Todo Add(SandboxContext db, Todo todo)
        {
            db.Todos.Add(todo);
            db.SaveChanges();

            return todo;
        }

        public Todo Update(SandboxContext db, Todo todo)
        {
            db.Todos.Attach(todo);
            db.Entry(todo).State = EntityState.Modified;
            db.SaveChanges();

            return todo;
        }

        public bool Delete(SandboxContext db, int todoId)
        {
            Todo todo = db.Todos.Where(x => x.Id == todoId).FirstOrDefault();

            db.Todos.Remove(todo);
            db.SaveChanges();

            return true;
        }
    }
}
