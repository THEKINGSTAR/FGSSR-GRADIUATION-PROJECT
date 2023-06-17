
namespace API.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;
        public UserRepository(DataContext context)
        {
            _context = context;

        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<object> GetUserData(int id)
        {
            return await _context.users.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<int> GetMaxCode()
        {
            return await _context.users.MaxAsync(x => x.UserCode);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<User> GetCurrentUser(int UserCode)
        {
            return await _context.users.FirstOrDefaultAsync(x => x.UserCode == UserCode);
        }

        public async Task<User> CheckUser(int UserCode)
        {
            return await _context.users.FirstOrDefaultAsync(x => x.UserCode == UserCode);
        }

        public async Task<IEnumerable<object>> GetTeamMembers(int UserCode)
        {
            var teamid = await _context.TeamMembers.FirstOrDefaultAsync(x => x.UserID == UserCode);
            var result = (from team in _context.TeamMembers
                          join usr in _context.users on team.UserID equals usr.UserCode
                          where team.TeamID == teamid.TeamID
                          select new
                          {
                              name = usr.UserName,
                              jobName = usr.JobName
                          }
                        );
            return await result.ToListAsync();
        }

        public async Task<UserProject> ProjectToRecordTeam(int userCode)
        {
            return await _context.UserProjects.FirstOrDefaultAsync(x => x.UserID == userCode);
        }

        public async Task<IEnumerable<object>> GetAllMembers()
        {
            return await _context.users.ToListAsync();
        }

        public async Task<Team> GetTeamName(int Usercode)
        {
            return await _context.Teams.FirstOrDefaultAsync(x => x.TeamLeader == Usercode);
        }

        public async Task<int> GetMaxProjectId()
        {
            return await _context.UserProjects.MaxAsync(x => x.ProjectID);
        }

        public async Task<IEnumerable<object>> GetTeamTasks(int usercode)
        {
            return await _context.task.Where(x => x.UserID == usercode).ToListAsync();
        }
    }
}