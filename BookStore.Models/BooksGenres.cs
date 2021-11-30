namespace BookStore.Models
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class BooksGenres
    {
        public string BookId { get; set; }

        public Book Book { get; set; }

        public string GenreId { get; set; }

        public Genre Genre { get; set; }
    }
}
