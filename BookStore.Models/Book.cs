namespace BookStore.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using static BookStore.Common.DatabaseConstraints.BookConstraint;

    public class Book : BaseEntity
    {
        public Book()
        {
            this.Genres = new HashSet<BooksGenres>();
            this.Reviews = new HashSet<Review>();
        }

        [Required]
        [MaxLength(IbsnMaxLength)]
        public string Ibsn { get; set; }

        [Required]
        [MaxLength(TitleMinLength)]
        public string Title { get; set; }

        public DateTime PublicationDate { get; set; }

        public int AvailableQuantity { get; set; }

        public decimal Price { get; set; }

        [Required]
        public string PublisherId { get; set; }

        public Publisher Publisher { get; set; }

        [Required]
        public string AuthorId { get; set; }

        public Author Author { get; set; }

        public ICollection<BooksGenres> Genres { get; set; }

        public ICollection<Review> Reviews { get; set; }

    }
}
