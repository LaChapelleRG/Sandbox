using Microsoft.EntityFrameworkCore;
using Sandbox.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Sandbox.DataAccess
{
    public class LinksDataAccess
    {
        public List<Links> GetAll(SandboxContext db)
        {
            return db.Links.Where(l => l.Visible == true).OrderBy(l => l.Sort).ToList();
        }

        public Links GetLinkById(SandboxContext db, int linkId)
        {
            return db.Links.Where(l => l.Id == linkId).FirstOrDefault();
        }

        public Links AddLink(SandboxContext db, Links link)
        {
            link.CreateTimestamp = DateTime.Now;
            link.Visible = true;
            db.Links.Add(link);
            db.SaveChanges();

            return link;
        }

        public Links UpdateLink(SandboxContext db, Links link)
        {
            db.Links.Attach(link);
            db.Entry(link).State = EntityState.Modified;
            db.SaveChanges();

            return link;
        }

        public bool Delete(SandboxContext db, int linkId)
        {
            Links link = db.Links.Where(l => l.Id == linkId).FirstOrDefault();

            db.Links.Remove(link);
            db.SaveChanges();

            return true;
        }
    }
}
