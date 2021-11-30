namespace BookStore.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class Review : BaseEntity
    {
        [Required]
        public string BookId { get; set; }

        public Book Book { get; set; }

        [Required]
        public string CustomerId { get; set; }

        public Customer Customer { get; set; }

        public DateTime DateOfCreation { get; set; }
    }
}
