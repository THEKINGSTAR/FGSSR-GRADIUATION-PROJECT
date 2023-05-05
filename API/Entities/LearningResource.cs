namespace API.Entities
{
    public class LearningResource
    {
        public int Id { get; set; }
        public string ResourceName { get; set; }
        public string Description { get; set; }
        public string Tools { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}