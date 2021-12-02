namespace BookStore.Controllers
{
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;

    public class TestIdentityController : ApiController
    {
        // GET: TestIdentityController
        [Route(nameof(Authenticated))]
        public async Task<ActionResult<string>> Authenticated()
        {
            string authData = "This data is for authenticated users!";

            return authData;
        }

        [AllowAnonymous]
        [Route(nameof(AlowedForAnonymous))]
        public async Task<ActionResult<string>> AlowedForAnonymous()
        {
            string authData = "This data is allowed for anonymous users!";

            return authData;
        }
    }
}
