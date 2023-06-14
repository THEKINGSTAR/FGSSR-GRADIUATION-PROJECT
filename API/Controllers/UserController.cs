
namespace API.Controllers
{
    public class UserController : BaseApiController
    {
        private readonly IUserRepository _userRepo;
        private readonly IMapper _mapper;
        public UserController(IUserRepository userRepo, IMapper mapper)
        {
            _userRepo = userRepo;
            _mapper = mapper;
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

        [HttpPost("updateUserData/{id}")]
        public async Task<IActionResult> updateUserData(int id, UpdateUserDto updateUserDto)
        {
            var user = await _userRepo.CheckUser(id);
            if (user == null)
            {
                return BadRequest($"You don't have permission to enter!");
            }
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(updateUserDto.password, out passwordHash, out passwordSalt);
            updateUserDto.PasswordHash = passwordHash;
            updateUserDto.PasswordSalt = passwordSalt;
            _mapper.Map(updateUserDto, user);
            if (await _userRepo.SaveAll())
            {
                return NoContent();
            }
            throw new Exception($"Creating search faild on statment !");
        }
        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        [HttpGet("teamMember/{usercode}")]
        public async Task<IActionResult> CheckUser(int usercode)
        {
            var user = await _userRepo.GetUserData(usercode);
            if (user == null)
            {
                return BadRequest($"You don't have permission to enter!");
            }
            var Members = await _userRepo.GetTeamMembers(usercode);
            if (Members != null)
            {
                return Ok(Members);
            }
            throw new Exception($"Creating search faild on statment !");
        }
    }
}