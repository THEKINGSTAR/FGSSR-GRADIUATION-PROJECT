
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

        [HttpPost("newTeam/{id}")]
        public async Task<IActionResult> NewTeam(int id, NewTeamDto newTeamDto)
        {
            var user = await _userRepo.CheckUser(id);
            if (user == null)
            {
                return BadRequest($"You don't have permission to enter!");
            }
            var ProjectId = await _userRepo.ProjectToRecordTeam(id);
            newTeamDto.ProjectID = ProjectId.ProjectID;
            var team = _mapper.Map<Team>(newTeamDto);
            _userRepo.Add(team);
            if (await _userRepo.SaveAll())
            {
                return NoContent();
            }
            throw new Exception($"Creating search faild on statment !");
        }

        [HttpGet("studentToTeam/{usercode}")]
        public async Task<IActionResult> StudentToTeam(int usercode)
        {
            var user = await _userRepo.GetUserData(usercode);
            if (user == null)
            {
                return BadRequest($"You don't have permission to enter!");
            }
            var Student = await _userRepo.GetAllMembers();
            if (Student != null)
            {
                return Ok(Student);
            }
            throw new Exception($"Creating search faild on statment !");
        }

        [HttpGet("addTeamMember/{usercode}/{id}")]
        public async Task<IActionResult> AddTeamMember(int usercode, int id)
        {
            var user = await _userRepo.GetUserData(usercode);
            if (user == null)
            {
                return BadRequest($"You don't have permission to enter!");
            }
            var teamMember = new TeamMember();
            teamMember.TeamID = usercode;
            teamMember.UserID = id;
            _userRepo.Add(teamMember);
            // var Student = await _userRepo.AddTeamMember(usercode, id);
            if (await _userRepo.SaveAll())
            {
                return NoContent();
            }
            throw new Exception($"Creating search faild on statment !");
        }

        [HttpGet("getTeamName/{usercode}")]
        public async Task<IActionResult> GetTeamName(int usercode)
        {
            var user = await _userRepo.GetUserData(usercode);
            if (user == null)
            {
                return BadRequest($"You don't have permission to enter!");
            }
            var team = await _userRepo.GetTeamName(usercode);
            if (team != null)
            {
                return Ok(team);
            }
            throw new Exception($"Creating search faild on statment !");
        }

        [HttpPost("CreateProject/{id}")]
        public async Task<IActionResult> CreateProject(int id, ProjectDto projectDto)
        {
            var user = await _userRepo.CheckUser(id);
            if (user == null)
            {
                return BadRequest($"You don't have permission to enter!");
            }
            var team = await _userRepo.GetTeamName(id);
            projectDto.TeamName = team.TeamName;
            var count = await _userRepo.GetProjectCount();
            if (count > 0)
            {
                var MaxProjectId = await _userRepo.GetMaxProjectId();
                projectDto.ProjectID = MaxProjectId + 1;
            }
            else
            {
                projectDto.ProjectID = 1;
            }
            projectDto.UserID = id;
            var Project = _mapper.Map<UserProject>(projectDto);
            _userRepo.Add(Project);
            if (await _userRepo.SaveAll())
            {
                return NoContent();
            }
            throw new Exception($"Creating search faild on statment !");
        }

        [HttpPost("CreateTask/{usercode}")]
        public async Task<IActionResult> CreateTask(int usercode, TaskDto taskDto)
        {
            var user = await _userRepo.CheckUser(usercode);
            if (user == null)
            {
                return BadRequest($"You don't have permission to enter!");
            }
            var Project = await _userRepo.ProjectToRecordTeam(usercode);
            taskDto.ProjectID = Project.ProjectID;
            taskDto.AssignedTo = usercode;
            taskDto.UserID = usercode;
            var task = _mapper.Map<Tasks>(taskDto);
            _userRepo.Add(task);
            if (await _userRepo.SaveAll())
            {
                return NoContent();
            }
            throw new Exception($"Creating search faild on statment !");
        }

        [HttpGet("getTeamTasks/{usercode}")]
        public async Task<IActionResult> GetTeamTasks(int usercode)
        {
            var user = await _userRepo.GetUserData(usercode);
            if (user == null)
            {
                return BadRequest($"You don't have permission to enter!");
            }
            var Tasks = await _userRepo.GetTeamTasks(usercode);
            if (Tasks != null)
            {
                return Ok(Tasks);
            }
            throw new Exception($"Creating search faild on statment !");
        }
    }
}