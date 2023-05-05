namespace API.Interface
{
    public interface IUserLogin
    {
        Task<User> Login();
    }
}