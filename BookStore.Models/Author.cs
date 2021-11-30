namespace BookStore.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using static BookStore.Common.DatabaseConstraints.AuthorConstraint;

    public class Author : BaseEntity
    {
        public Author()
        {
            this.Books = new HashSet<Book>();
        }

        [Required]
        [MaxLength(FirstNameMaxLength)]
        public string FirstName { get; set; }

        [Required]
        [MaxLength(LastNameMaxLength)]
        public string LastName { get; set; }

        [Required]
        [MaxLength(CompanyMinLength)]
        public string CompanyName { get; set; }

        public ICollection<Book> Books { get; set; }
    }
}
