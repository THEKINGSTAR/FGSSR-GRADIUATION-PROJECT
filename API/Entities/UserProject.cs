
namespace API.Entities
{
    public class UserProject
    {
        public int Id { get; set; }
        public int UserID { get; set; }
        public int ProjectID { get; set; }
        public string Role { get; set; }
        public string TeamName { get; set; }
        public DateTime JoinedAt { get; set; }
        public DateTime LeftAt { get; set; }
    }
}