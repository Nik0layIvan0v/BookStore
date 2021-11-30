namespace BookStore.Data.EntityConfigurations
{
    using BookStore.Models;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;

    public class BooksGenresEntityConfiguration : IEntityTypeConfiguration<BooksGenres>
    {
        public void Configure(EntityTypeBuilder<BooksGenres> booksGenres)
        {
            booksGenres.HasKey(key => new { key.BookId, key.GenreId });

            booksGenres.HasOne(bookGenre => bookGenre.Book)
                .WithMany(book => book.Genres)
                .HasForeignKey(fk => fk.BookId)
                .OnDelete(DeleteBehavior.Restrict);

            booksGenres.HasOne(booksGenre => booksGenre.Genre)
                 .WithMany(genre => genre.Books)
                 .HasForeignKey(fk => fk.GenreId)
                 .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
