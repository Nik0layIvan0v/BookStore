namespace BookStore.Services.Identity
{
    using BookStore.Services.Identity.Contracts;
    using BookStore.Services.Identity.Models;
    using Microsoft.AspNetCore.Mvc;
    using System;

    public class IdentityService : IIdentityService
    {
        public string GenerateJwtToken(IdentityServiceModel model)
        {
            throw new NotImplementedException();
        }
    }
}
