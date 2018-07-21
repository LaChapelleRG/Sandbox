using Microsoft.EntityFrameworkCore;

namespace Sandbox.Models
{
    public partial class SandboxContext : DbContext
    {
        public SandboxContext() { }

        public SandboxContext(DbContextOptions<SandboxContext> options) : base(options) { }

        public virtual DbSet<Links> Links { get; set; }
        public virtual DbSet<Todo> Todos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=90012LT8021\\SQLEXPRESS;Database=Sandbox;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }

    }
}
