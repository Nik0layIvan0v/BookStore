namespace BookStore.Models.Identity
{
    using System;

    public class RegisterResponceModel
    {
        public RegisterResponceModel(string id, string username)
        {
            if (string.IsNullOrEmpty(id))
            {
                throw new ArgumentException($"'{nameof(id)}' cannot be null or empty.", nameof(id));
            }

            if (string.IsNullOrEmpty(username))
            {
                throw new ArgumentException($"'{nameof(username)}' cannot be null or empty.", nameof(username));
            }

            this.Id = id;

            this.Username = username;
        }

        public string Id { get; set; }

        public string Username { get; set; }
    }
}
