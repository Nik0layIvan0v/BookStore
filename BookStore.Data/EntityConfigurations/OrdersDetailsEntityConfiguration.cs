namespace BookStore.Data.EntityConfigurations
{
    using BookStore.Models;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;
    using System;

    public class OrdersDetailsEntityConfiguration : IEntityTypeConfiguration<OrderDetails>
    {
        public void Configure(EntityTypeBuilder<OrderDetails> orderDetails)
        {
            orderDetails.HasKey(k => new { k.OrderId, k.BookId });

            orderDetails.HasOne(od => od.Book)
                .WithMany(book => book.OrderDetails)
                .HasForeignKey(fk => fk.BookId)
                .OnDelete(DeleteBehavior.Restrict);

            orderDetails.HasOne(od => od.Order)
                .WithMany(order => order.OrderDetails)
                .HasForeignKey(fk => fk.OrderId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
