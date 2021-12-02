namespace BookStore.Infrastructure
{
    using BookStore.Data;
    using BookStore.Models;
    using Microsoft.Extensions.Configuration;
    using BookStore.Services.Identity;
    using BookStore.Services.Identity.Contracts;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.EntityFrameworkCore;

    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services.AddTransient<BookStoreDesingTimeFactory>();

            services.AddTransient<IIdentityService, IdentityService>();

            return services;
        }

        public static IServiceCollection AddBookStoreIdentity(this IServiceCollection services)
        {
            services.AddIdentity<User, IdentityRole>(
               options =>
                   {
                       options.Password.RequiredLength = 3;
                       options.SignIn.RequireConfirmedAccount = false;
                       options.Password.RequireDigit = false;
                       options.Password.RequireLowercase = false;
                       options.Password.RequireNonAlphanumeric = false;
                       options.Password.RequireUppercase = false;
                   })
               .AddEntityFrameworkStores<BookStoreDbContext>();

            return services;
        }

        public static IServiceCollection AddBookStoreDbContext(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<BookStoreDbContext>(options =>
           {
               options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
           });

            return services;
        }
    }
}
