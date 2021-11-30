namespace BookStore.Services.Contracts
{
    using BookStore.Services.Models;
    using System.Threading.Tasks;

    public interface IGenreService
    {
        Task<GenreServiceModel[]> GetAllGenres();
    }
}
