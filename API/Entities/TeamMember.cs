namespace API.Entities
{
    public class TeamMember
    {
        public int TeamMemberID { get; set; }
        public int UserID { get; set; }
        public int TeamID { get; set; }
        public DateTime JoinedAt { get; set; }
        public DateTime LeftAt { get; set; }
    }
}