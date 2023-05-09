namespace API.DTOs
{
    public class MessagesDto
    {
        public long? Code { get; set; } = 0;
        public long? FromNumber { get; set; }
        public long? ToNumber { get; set; }
        public string MessageID { get; set; }
        public string ChatID { get; set; }
        public DateTime? DateSent { get; set; } = DateTime.UtcNow;
        public DateTime? ReadMessage { get; set; }
        public TimeSpan? TimeMessage { get; set; }
        public byte[] MediaEncode { get; set; }
        public int? UserSent { get; set; }
        public string NameSentMessage { get; set; }
        public string Status { get; set; }
        public string TypeMessage { get; set; }
        public string ReplyId { get; set; }
        public string ContentMessage { get; set; }
        public string TypeDocument { get; set; }
        public string ToAnyOne { get; set; }
        public string PublicId { get; set; }
    }
    public class MessagesUpdateUnReadDto
    {
        public DateTime? ReadMessage { get; set; }
        public string Status { get; set; }
    }

    public class messageChatDto
    {
        public long? PhoneNumber { get; set; }
        public int? UserCode { get; set; }
        public string LastMessage { get; set; }
        public DateTime? DateSent { get; set; } = DateTime.UtcNow;
        public int counterNonRead { get; set; } = 0;
    }

    public class PhotoDto
    {
        public string Url { get; set; }
        public string PublicId { get; set; }
        public string blob { get; set; }
    }

    public class MessgeStatusDto
    {
        public long? ToNumber { get; set; } = 0;
        public string MessageID { get; set; } = "";
        public DateTime? ReadMessage { get; set; }
        public string Status { get; set; }
    }

    public class WhatsMessageDto
    {
        public string Mobile { get; set; }
    }
    public class WhatsRequestDto
    {
        public string messaging_product { get; set; } = "whatsapp";
        public string recipient_type { get; set; } = "individual";
        public string to { get; set; }
        public string type { get; set; } = "template";

        public TempMessageDto template { get; set; }
    }
    public class TempMessageDto
    {
        public string name { get; set; }
        public Language language { get; set; }
        public ICollection<Components> components { get; set; }
    }
    public class Language
    {
        public string code { get; set; }
    }
    public class Components
    {
        public string type { get; set; } = "body";
        public Parameters parameters { get; set; }
    }
    public class Parameters
    {
        public string type { get; set; } = "text";
        public string text { get; set; }
    }
}