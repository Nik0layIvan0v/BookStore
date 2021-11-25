namespace BookStore.Data.EntityConfigurations
{
    using BookStore.Models;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;
    using System;

    public class PublisherEntityConfiguration : IEntityTypeConfiguration<Publisher>
    {
        public void Configure(EntityTypeBuilder<Publisher> publisher)
        {
            throw new NotImplementedException();
        }
    }
}
