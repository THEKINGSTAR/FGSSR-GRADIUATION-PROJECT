
namespace API.Interface
{
    public interface IUserRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<object> GetUserData(int id);
        Task<int> GetMaxCode();
        Task<User> GetCurrentUser(int UserCode);
        Task<User> CheckUser(int UserCode);
        Task<IEnumerable<object>> GetTeamMembers(int UserCode);
        Task<UserProject> ProjectToRecordTeam(int UserCode);
        Task<IEnumerable<object>> GetAllMembers();
        Task<Team> GetTeamName(int Usercode);
        Task<int> GetMaxProjectId();
        Task<IEnumerable<object>> GetTeamTasks(int usercode);
    }
}