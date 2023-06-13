
namespace API.Interface
{
    public interface IUserRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<object> GetUserData(int id);
        Task<int> GetMaxCode();
    }
}