namespace BookStore.Common
{
    public static class DatabaseConstraints
    {
        public static class AuthorConstraint
        {
            public const int FirstNameMinLength = 100;

            public const int LastNameMinLength = 100;

            public const int CompanyMinLength = 100;

            public const int FirstNameMaxLength = 100;

            public const int LastNameMaxLength = 100;

            public const int CompanyMaxLength = 100;
        }

        public static class BookConstraint
        {
            public const int TitleMinLength = 100;

            public const int TitleMaxLength = 100;

            public const int IbsnMinLength = 50;

            public const int IbsnMaxLength = 250;

        }

        public static class PublisherConstraint
        {
            public const int NameMinLength = 5;

            public const int NameMaxLength = 100;
        }

        public static class GenreConstraint
        {
            public const int NameMinLength = 5;

            public const int NameMaxLength = 100;
        }
    }
}
