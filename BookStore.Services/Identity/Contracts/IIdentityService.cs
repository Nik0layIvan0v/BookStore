namespace BookStore.Services.Identity.Contracts
{
    using BookStore.Services.Identity.Models;
    using Microsoft.AspNetCore.Mvc;

    public interface IIdentityService
    {
        string GenerateJwtToken(IdentityServiceModel model);
    }
}
