namespace BookStore.Data
{
    using Microsoft.EntityFrameworkCore;
    using System.Reflection;

    public class BookStoreDbContext : DbContext
    {
        public BookStoreDbContext(DbContextOptions<BookStoreDbContext> options)
               : base(options)
        {
        }

        //Add DbSets....

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            //base.OnModelCreating(modelBuilder); -> verify if needed!
        }
    }
}
