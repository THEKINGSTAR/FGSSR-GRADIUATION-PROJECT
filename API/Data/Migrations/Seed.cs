namespace API.Data.Migrations
{
    public class Seed
    {
        public static async Task SeedUser(DataContext context)
        {
            // ======================================   User
            if (await context.users.AnyAsync()) return;
            var UserData = await File.ReadAllTextAsync("Data/UserSeed.json");
            var UserOptions = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
            var Users_ = JsonSerializer.Deserialize<List<User>>(UserData);
            foreach (var user in Users_)
            {
                using var hmac = new HMACSHA512();
                user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("Admin@123"));
                user.PasswordSalt = hmac.Key;
                context.users.Add(user);
            }

            await context.SaveChangesAsync();
        }
    }
}
