
namespace API.Controllers
{
    public class UserController : BaseApiController
    {
        private readonly IUserRepository _userRepo;
        public UserController(IUserRepository userRepo)
        {
            _userRepo = userRepo;
        }
        [HttpGet("user/{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _userRepo.GetUserData(id);
            if (user != null)
            {
                return Ok(user);
            }
            throw new Exception($"Creating search faild on statment !");
        }
    }
}