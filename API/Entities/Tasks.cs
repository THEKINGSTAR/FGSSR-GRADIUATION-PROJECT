namespace API.Entities
{
    public class Tasks
    {
        public int Id { get; set; }
        public string TaskName { get; set; }
        public string Description { get; set; }
        public int AssignedTo { get; set; }
        public string Status { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int UserID { get; set; }
        public int ProjectID { get; set; }
    }
}