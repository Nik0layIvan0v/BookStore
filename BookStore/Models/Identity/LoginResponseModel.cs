namespace BookStore.Models.Identity
{
    using System;

    public class LoginResponseModel
    {
        public LoginResponseModel(string token, string userName, string id)
        {
            if (token is null)
            {
                throw new ArgumentNullException(nameof(token));
            }

            if (userName is null)
            {
                throw new ArgumentNullException(nameof(userName));
            }

            if (id is null)
            {
                throw new ArgumentNullException(nameof(id));
            }

            this.Token = token;
            this.UserName = userName;
            this.Id = id;
        }

        public string Token { get; private set; }

        public string UserName { get; private set; }

        public string Id { get; private set; }
    }
}
