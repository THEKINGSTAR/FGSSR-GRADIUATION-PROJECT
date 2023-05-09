using API.DTOs;

namespace API.SignalR
{
    [Authorize]
    public class MessageHub : Hub
    {
        private readonly IMessageRepository _messageRepository;
        private readonly IMapper _mapper;
        private readonly MessageTracker _tracker;

        public MessageHub(IMessageRepository messageRepository, IMapper mapper, MessageTracker tracker)
        {
            _tracker = tracker;
            _mapper = mapper;
            _messageRepository = messageRepository;
        }

        public override async Task OnConnectedAsync()
        {
            // var usercode = Convert.ToInt32(Context.User.GetUsername());
            // var messages = await _messageRepository.GetPhoneNumberToChat(usercode);
            // await _tracker.UserConnected(usercode, Context.ConnectionId);
            // await Clients.Client(Context.ConnectionId).SendAsync("ReceiveMessageThread", messages);
        }

        public override async Task OnDisconnectedAsync(Exception exception) => await base.OnDisconnectedAsync(exception);

        public async Task SendMessage(MessagesDto messageDto, long? usercode)
        {
            var connectionId = await _tracker.GetConnectionsForUser(Convert.ToInt32(usercode));
            var Connection = connectionId[0].ToString();
            if (connectionId != null)
            {
                await Clients.Client(Connection).SendAsync("RecivedNewMessage");
            }
        }
    }
}