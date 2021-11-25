namespace BookStore.Data
{
    using BookStore.Models;
    using Microsoft.EntityFrameworkCore;
    using System.Reflection;

    public class BookStoreDbContext : DbContext
    {
        public BookStoreDbContext(DbContextOptions<BookStoreDbContext> options)
               : base(options)
        {
        }

        public DbSet<Author> Authors { get; init; }

        public DbSet<Book> Books { get; init; }

        public DbSet<Genre> Genres { get; init; }

        public DbSet<Review> Reviews { get; init; }

        public DbSet<Publisher> Publishers { get; init; }

        //Add DbSets....

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
