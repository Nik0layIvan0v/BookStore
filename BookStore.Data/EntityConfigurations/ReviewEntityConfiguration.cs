namespace BookStore.Data.EntityConfigurations
{
    using BookStore.Models;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;

    public class ReviewEntityConfiguration : IEntityTypeConfiguration<Review>
    {
        public void Configure(EntityTypeBuilder<Review> review)
        {
            throw new System.NotImplementedException();
        }
    }
}
