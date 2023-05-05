namespace API.Entities
{
    public class User_Learning
    {
        public int Id { get; set; }
        public int UserID { get; set; }
        public int ResourceID { get; set; }
        public byte Completed { get; set; } = 0;
    }
}