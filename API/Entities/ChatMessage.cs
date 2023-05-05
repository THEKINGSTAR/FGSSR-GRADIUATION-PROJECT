namespace API.Entities
{
    public class ChatMessage
    {
        public int Id { get; set; }
        public int SenderID { get; set; }
        public int TeamID { get; set; }
        public int UserID { get; set; }
        public string Message { get; set; }
        public DateTime SentAt { get; set; }
    }
}