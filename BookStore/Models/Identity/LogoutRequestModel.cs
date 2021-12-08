namespace BookStore.Models.Identity
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Linq;
    using System.Threading.Tasks;

    public class LogoutRequestModel
    {
        [Required]
        public string Token { get; set; }
    }
}
