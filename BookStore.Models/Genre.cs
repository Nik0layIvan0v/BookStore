namespace BookStore.Models
{
    using System.Collections.Generic;

    public class Genre : BaseEntity
    {
        public Genre()
        {
            this.Books = new HashSet<Book>();
        }

        public string Name { get; set; }

        public ICollection<Book> Books { get; set; }
    }
}
