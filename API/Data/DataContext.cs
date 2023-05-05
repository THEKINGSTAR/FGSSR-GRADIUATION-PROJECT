namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<User> users { get; set; }
        public DbSet<LearningResource> LearningResources { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Tasks> task { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<User_Learning> UserLearning { get; set; }
        public DbSet<UserProject> UserProjects { get; set; }
        public DbSet<ChatMessage> ChatMessages { get; set; }
        public DbSet<TeamMember> TeamMembers { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}