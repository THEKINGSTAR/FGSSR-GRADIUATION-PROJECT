namespace API.Interface
{
    public interface IMessageRepository
    {
        void Add<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<IEnumerable<Messages>> GetMessageThread(int usercode);
        Task<Employee> GetEmployee(int UserCode);
        Task<IEnumerable<object>> GetPhoneNumberToChat(int Usercode);
        Task<MessagePhone> GetPhoneNumber(long? Usercode, int? usercode);
        Task<IEnumerable<Messages>> MessagesForConversion(long? number, int usercode);
        Task<Employee> GetUserFromPhoneNumber(long? phoneNumber);
        Task<Employee> GetToken(long phoneNumber);
        Task<IEnumerable<Messages>> GetUnreadMessage(long phoneNumber);
        Task<Messages> GetMessageToUpdateStatus(string messageId);

    }
}