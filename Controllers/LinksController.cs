using Microsoft.AspNetCore.Mvc;
using Sandbox.DataAccess;
using Sandbox.Models;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Sandbox.Controllers
{
    [Route("api/[controller]")]
    public class LinksController : Controller
    {
        public LinksDataAccess Repo { get; set; } = new LinksDataAccess();

        [Route("/api/links")]
        [HttpGet]
        public IEnumerable<Links> Get()
        {
            using (SandboxContext db = new SandboxContext())
            {


                List<Links> result = Repo.GetAll(db);

                return result;
            }
        }

        [Route("/api/links/{id}")]
        [HttpGet]
        public Links Get(int id)
        {
            using (SandboxContext db = new SandboxContext())
            {
                Links link = Repo.GetLinkById(db, id);

                return link;
            }
        }

        [Route("/api/links")]
        [HttpPost]
        public Links Add([FromBody]Links link)
        {
            using (SandboxContext db = new SandboxContext())
            {
                Links result = Repo.AddLink(db, link);

                return result;
            }
        }

        [Route("/api/links")]
        [HttpPut]
        public Links Update([FromBody]Links link)
        {
            using (SandboxContext db = new SandboxContext())
            {
                Links result = Repo.UpdateLink(db, link);

                return result;
            }
        }

        [Route("/api/links/{id}")]
        [HttpDelete]
        public void Delete(int id)
        {
            using (SandboxContext db = new SandboxContext())
            {
                bool result = Repo.Delete(db, id);

            }
        }
    }
}
