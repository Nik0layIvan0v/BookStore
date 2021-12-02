namespace BookStore.Services.Identity.Models
{
    public class IdentityServiceModel
    {
        public IdentityServiceModel(string userId, string username, string secret)
        {
            if (string.IsNullOrEmpty(userId))
            {
                throw new System.ArgumentException($"'{nameof(userId)}' cannot be null or empty.", nameof(userId));
            }

            if (string.IsNullOrEmpty(username))
            {
                throw new System.ArgumentException($"'{nameof(username)}' cannot be null or empty.", nameof(username));
            }

            if (string.IsNullOrEmpty(secret))
            {
                throw new System.ArgumentException($"'{nameof(secret)}' cannot be null or empty.", nameof(secret));
            }

            UserId = userId;
            Username = username;
            Secret = secret;
        }

        public string UserId { get; }

        public string Username { get; }

        public string Secret { get; }
    }
}
