namespace BookStore.Services.Identity.Models
{
    using System.ComponentModel.DataAnnotations;

    public class IdentityModel
    {
        [Required]
        //TODO: [MinLength()]
        //TODO: [MaxLength()]
        public string Username { get; set; }

        [Required]
        //TODO: [MinLength()]
        //TODO: [MaxLength()]
        public string Password { get; set; }
    }
}
