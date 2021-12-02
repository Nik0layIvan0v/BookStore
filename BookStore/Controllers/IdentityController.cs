namespace BookStore.Controllers
{
    using Helpers;
    using Models;
    using Models.Identity;
    using Services.Identity.Contracts;
    using Services.Identity.Models;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;

    public class IdentityController : ApiController
    {
        private readonly IIdentityService userService;
        private readonly UserManager<User> userManager;
        private readonly AppSettings appSettings;

        public IdentityController(IIdentityService userService, UserManager<User> userManager, AppSettings appSettings)
        {
            this.userManager = userManager;
            this.appSettings = appSettings;
            this.userService = userService;
        }

        [HttpPost]
        [AllowAnonymous]
        [Route(nameof(Login))]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult<LoginResponseModel>> Login([FromBody] LoginRequestModel model)
        {
            //TODO: Add Email check so user can decide to login with email or username!

            var user = await this.userManager.FindByNameAsync(model.Username);

            if (user == null)
            {
                return Unauthorized();
            }

            var isPaswordValid = await this.userManager.CheckPasswordAsync(user, model.Password);

            if (isPaswordValid == false)
            {
                return Unauthorized();
            }

            var serviceModel = new IdentityServiceModel(user.Id, user.UserName, appSettings.Secret);

            var token = this.userService.GenerateJwtToken(serviceModel);

            return new LoginResponseModel(token);
        }

        [HttpPost]
        [AllowAnonymous]
        [Route(nameof(Register))]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult<RegisterResponceModel>> Register([FromBody] RegisterRequestModel model)
        {
            var user = new User
            {
                Email = model.Email,
                UserName = model.Username
            };

            var result = await this.userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }

            return new RegisterResponceModel(user.Id, user.UserName);
        }
    }
}
