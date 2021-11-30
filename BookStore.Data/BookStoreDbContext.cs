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

        public DbSet<BooksGenres> BooksGenres { get; set; }

        public DbSet<Review> Reviews { get; init; }

        public DbSet<Publisher> Publishers { get; init; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<Customer> Customers { get; set; }

        public DbSet<OrderDetails> OrderDetails { get; set; }

        //Add DbSets....

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
