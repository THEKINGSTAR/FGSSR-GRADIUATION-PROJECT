
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
    }
}