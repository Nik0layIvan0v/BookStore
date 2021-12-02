namespace BookStore.Infrastructure
{
    using Data;
    using Models;
    using Helpers;
    using Microsoft.Extensions.Configuration;
    using Services.Identity;
    using Services.Identity.Contracts;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.EntityFrameworkCore;
    using System.Text;
    using Microsoft.AspNetCore.Authentication.JwtBearer;
    using Microsoft.IdentityModel.Tokens;

    public static class ServiceCollectionExtensions
    {
        public static AppSettings GetApplicationSettings(this IServiceCollection services, IConfiguration configuration)
        {
            var appSettingsConfiguration = configuration.GetSection("AppSettings");

            services.Configure<AppSettings>(appSettingsConfiguration);

            return appSettingsConfiguration.Get<AppSettings>();
        }

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

        public static IServiceCollection AddJwtAuthentication(this IServiceCollection services, AppSettings settings)
        {
            var key = Encoding.ASCII.GetBytes(settings.Secret);

            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
                .AddJwtBearer(x =>
                {
                    x.RequireHttpsMetadata = false;
                    x.SaveToken = true;
                    x.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(key),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                });

            return services;
        }
    }
}
