namespace BookStore.Models.Identity
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class LoginResponseModel
    {
        public LoginResponseModel(string token)
        {
            if (token is null)
            {
                throw new ArgumentNullException(nameof(token));
            }

            this.Token = token;
        }

        public string Token { get; private set; }
    }
}
