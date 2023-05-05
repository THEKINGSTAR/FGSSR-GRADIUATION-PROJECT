
namespace API.Entities
{
    public class Team
    {
        public int Id { get; set; }
        public string TeamName { get; set; }
        public int ProjectID { get; set; }
        public int TeamLeader { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}