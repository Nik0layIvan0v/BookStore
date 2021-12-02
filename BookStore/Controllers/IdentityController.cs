// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BookStore.Controllers
{
    using BookStore.Models;
    using BookStore.Models.Identity;
    using BookStore.Services.Identity.Contracts;
    using BookStore.Services.Identity.Models;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;
    using System.Linq;
    using System.Threading.Tasks;

    public class IdentityController : ApiController
    {
        private readonly IIdentityService userService;
        private readonly UserManager<User> userManager;

        public IdentityController(IIdentityService userService, UserManager<User> userManager)
        {
            this.userManager = userManager;
            this.userService = userService;
        }

        [HttpPost]
        [AllowAnonymous]
        [Route(nameof(Login))]
        public async Task<ActionResult> Login(LoginRequestModel model)
        {
            return Ok();
        }

        [HttpPost]
        [AllowAnonymous]
        [Route(nameof(Register))]
        public async Task<ActionResult> Register(RegisterRequestModel model)
        {
            return Ok();
        }

        public async Task<ActionResult> Logout(string userId)
        {
            return Ok();
        }
    }
}
