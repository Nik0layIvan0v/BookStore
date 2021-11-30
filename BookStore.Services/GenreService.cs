namespace BookStore.Services
{
    using BookStore.Data;
    using BookStore.Services.Contracts;
    using BookStore.Services.Models;
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Linq;
    using System.Threading.Tasks;

    public class GenreService : IGenreService
    {
        private readonly BookStoreDbContext DbContext;
        public GenreService(BookStoreDbContext dbContext)
        {
            this.DbContext = dbContext;
        }

        public async Task<GenreServiceModel[]> GetAllGenres()
        {
            return await this.DbContext.Genres
                  .Select(g => new GenreServiceModel
                  {
                      GenreId = g.Id,
                      GenreContent = g.Name
                  }).ToArrayAsync();
        }
    }
}
