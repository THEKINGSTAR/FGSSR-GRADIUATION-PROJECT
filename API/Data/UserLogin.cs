namespace API.Data
{
    public class UserLogin : IUserLogin
    {
        private readonly DataContext _context;
        public UserLogin(DataContext context)
        {
            _context = context;
        }

        public Task<User> Login()
        {
            throw new NotImplementedException();
        }
    }
}