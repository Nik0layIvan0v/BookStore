using System;
using System.ComponentModel.DataAnnotations;

namespace BookStore.Models
{
    public class Book : BaseEntity
    {
        [Required]
        [MaxLength(250)]
        public string Title { get; set; }

        public DateTime PublicationDate { get; set; }

        public decimal Price { get; set; }

        public Publisher Publisher { get; set; }
    }
}
