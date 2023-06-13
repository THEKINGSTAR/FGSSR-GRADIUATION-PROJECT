
namespace API.Controllers
{
    public class AuthController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly ITokenService _token;
        private readonly IUserRepository _userRepository;
        // private readonly UserManager<User> _userManager;

        public AuthController(DataContext context, ITokenService token, IUserRepository userRepository)
        {
            _context = context;
            _token = token;
            _userRepository = userRepository;
            // _userManager = userManager;
        }
        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            if (await UserExist(registerDto.username.ToLower())) { return BadRequest("User is token!!"); }

            if (await EmailExist(registerDto.Email.ToLower())) { return BadRequest("Email is token!!"); }

            using var hmac = new HMACSHA512();
            var user = new User
            {
                UserName = registerDto.username,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.password)),
                PasswordSalt = hmac.Key,
                Email = registerDto.Email,
                PhoneNumber = registerDto.PhoneNumber
            };
            var Code = await _userRepository.GetMaxCode();
            user.UserCode = Code + 1;
            _context.users.Add(user);
            await _context.SaveChangesAsync();
            return new UserDto
            {
                user = user.UserName,
                id = user.UserCode,
                Token = _token.CreateToken(user)
            };
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _context.users.FirstOrDefaultAsync(x => x.UserName == loginDto.Username);
            if (user == null) return Unauthorized("Invalid username!");
            using var hmac = new HMACSHA512(user.PasswordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));
            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i]) return Unauthorized("Invalid Password!");
            }
            return new UserDto
            {
                user = user.UserName,
                id = user.UserCode,
                Token = _token.CreateToken(user)
            };
        }

        // [Authorize]
        // [HttpGet("account")]
        // public async Task<ActionResult<UserDto>> GetCurrentUser()
        // {
        //     var user = await _userManager.FindByEmailFromClaimsPrincipal(User);

        //     return new UserDto
        //     {
        //         id = user.UserCode,
        //         Token = _token.CreateToken(user),
        //         user = user.UserName
        //     };
        // }

        private async Task<bool> UserExist(string username)
        {
            if (await _context.users.AnyAsync(x => x.UserName == username))
            {
                return true;
            }
            return false;
        }
        private async Task<bool> EmailExist(string Email)
        {
            return await _context.users.AnyAsync(x => x.UserName == Email.ToLower());
        }
    }
}