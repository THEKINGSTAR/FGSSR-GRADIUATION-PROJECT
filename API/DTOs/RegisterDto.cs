namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string username { get; set; }
        [Required]
        public string password { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime LastLogin { get; set; } = DateTime.UtcNow;
    }
    public class LoginDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
    public class UserDto
    {
        public string user { get; set; }
        public int id { get; set; }
        public string Token { get; set; }
    }
    public class UpdateUserDto
    {
        public int UserCode { get; set; }
        public string UserName { get; set; }
        public string password { get; set; }
        public byte[] PasswordSalt { get; set; }
        public byte[] PasswordHash { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Websit { get; set; }
        public string JobName { get; set; }
    }
    public class NewTeamDto
    {
        public string TeamName { get; set; }
        public int ProjectID { get; set; }
        public int TeamLeader { get; set; }
        public string TeamTag { get; set; }
        public string Deacription { get; set; }
    }
    public class ProjectDto
    {
        public int UserID { get; set; }
        public int ProjectID { get; set; }
        public string Role { get; set; }
        public string TeamName { get; set; }
        public string Deacription { get; set; }
    }
    public class TaskDto
    {
        public string TaskName { get; set; }
        public string Description { get; set; }
        public int ProjectID { get; set; }
        public int AssignedTo { get; set; }
        public int UserID { get; set; }
    }
}