namespace API.Interface
{
    public interface IMessageRepository
    {
        void Add<T>(T entity) where T : class;
        Task<bool> SaveAll();
    }
}