namespace BookStore.Infrastructure
{
    using Data;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.DependencyInjection;
    using System;

    public static class ApplicationBuilderExtensions
    {
        public static IApplicationBuilder PrepareDatabase(this IApplicationBuilder applicationBuilder)
        {
            using var serviceScope = applicationBuilder.ApplicationServices.CreateScope();

            var dbContextFactory = serviceScope.ServiceProvider.GetRequiredService<BookStoreDesingTimeFactory>();

            var dbContext = dbContextFactory.CreateDbContext();

            dbContext.Database.Migrate();

            return applicationBuilder;
        }
    }
}
