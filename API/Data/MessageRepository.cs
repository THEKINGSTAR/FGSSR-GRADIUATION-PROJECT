namespace API.Data
{
    public class MessageRepository : IMessageRepository
    {
        private readonly HolContext _context;

        public MessageRepository(HolContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<IEnumerable<Messages>> GetMessageThread(int usercode)
        {
            var result = await _context.MessageWhatsapp.Where(x => x.UserSent == usercode).ToListAsync();
            return result;
        }

        public async Task<Employee> GetEmployee(int UserCode)
        {

            var result = await _context.EMPLOYEE.Where(x => x.CODE == UserCode).FirstOrDefaultAsync();
            return result;
        }

        public async Task<IEnumerable<object>> GetPhoneNumberToChat(int Usercode)
        {
            var result = (from phone in _context.MessagePhoneNumberClientChat
                          let counterNonRead = (_context.MessageWhatsapp.Where(x => x.ReadMessage == null)
                          .Where(x => x.FromNumber == phone.PhoneNumber || x.ToNumber == phone.PhoneNumber).Count())
                          where phone.UserCode == Usercode
                          select new
                          {
                              id = phone.Id,
                              phoneNumber = phone.PhoneNumber,
                              userCode = phone.UserCode,
                              lastMessage = phone.LastMessage,
                              dateSent = phone.DateSent,
                              counterNonRead = ((int?)counterNonRead ?? 0),
                          }
            );
            return await result.ToListAsync();
        }

        public async Task<MessagePhone> GetPhoneNumber(long? phoneNumber, int? userCode)
        {
            var result = await _context.MessagePhoneNumberClientChat
            .FirstOrDefaultAsync(x => x.PhoneNumber == phoneNumber && x.UserCode == userCode);
            return result;
        }

        public async Task<IEnumerable<Messages>> MessagesForConversion(long? number, int usercode)
        {
            var result = await _context.MessageWhatsapp
            .Where(x => x.FromNumber == number || x.ToNumber == number)
            .Where(X => X.UserSent == usercode)
            .OrderBy(x => x.DateSent)
            .ToListAsync();
            return result;
        }

        public async Task<Employee> GetUserFromPhoneNumber(long? phoneNumber)
        {
            var result = await _context.EMPLOYEE.Where(x => x.PhoneNumber == phoneNumber).FirstOrDefaultAsync();
            return result;
        }

        public async Task<Employee> GetToken(long phoneNumber)
        {
            var result = await _context.EMPLOYEE.Where(x => x.PhoneNumber == phoneNumber).FirstOrDefaultAsync();
            return result;
        }

        public async Task<IEnumerable<Messages>> GetUnreadMessage(long phoneNumber)
        {
            var result = await _context.MessageWhatsapp
            .Where(x => x.ReadMessage == null)
             .ToListAsync();
            return result;
        }

        public async Task<Messages> GetMessageToUpdateStatus(string messageId)
        {
            var result = await _context.MessageWhatsapp.Where(x => x.MessageID == messageId).FirstOrDefaultAsync();
            return result;
        }
    }
}