namespace BookStore.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using static Common.DatabaseConstraints.GenreConstraint;

    public class Genre : BaseEntity
    {
        public Genre()
        {
            this.Books = new HashSet<BooksGenres>();
        }

        [Required]
        [MaxLength(NameMaxLength)]
        public string Name { get; set; }

        public ICollection<BooksGenres> Books { get; set; }
    }
}
