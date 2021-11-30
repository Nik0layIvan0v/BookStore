namespace BookStore.Models
{
    using System.ComponentModel.DataAnnotations;

    public class OrderDetails
    {
        [Required]
        public string BookId { get; set; }

        public Book Book { get; set; }

        [Required]
        public string OrderId { get; set; }

        public Order Order { get; set; }

        public int Amount { get; set; }
    }
}
