namespace BookStore.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using static Common.DatabaseConstraints.PublisherConstraint;

    public class Publisher : BaseEntity
    {
        public Publisher()
        {
            this.Books = new HashSet<Book>();
        }

        [Required]
        [MaxLength(NameMaxLength)]
        public string Name { get; set; }

        public ICollection<Book> Books { get; set; }
    }
}
