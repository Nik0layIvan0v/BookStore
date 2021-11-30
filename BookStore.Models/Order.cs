namespace BookStore.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public class Order : BaseEntity
    {
        public Order()
        {
            this.OrderDetails = new HashSet<OrderDetails>();
        }

        [Required]
        public string CustomerId { get; set; }

        public Customer Customer { get; set; }

        public DateTime OrderDate { get; set; }

        public bool OrderState { get; set; }

        public ICollection<OrderDetails> OrderDetails { get; set; }
    }
}
