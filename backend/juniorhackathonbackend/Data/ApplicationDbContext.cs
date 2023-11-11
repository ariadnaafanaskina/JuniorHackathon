using juniorhackathonbackend.Data.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace juniorhackathonbackend.Data
{
    public class ApplicationDbContext : IdentityDbContext<UserEntity, IdentityRole<Guid>, Guid>
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<UserEntity> Users { get; set; }

        public DbSet<GameEntity> Games { get; set; }

        public DbSet<CardEntity> Cards { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<UserEntity>(o =>
            {
                o.ToTable("Users");
            });
        }
    }
}

