
namespace API.Extinsions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddDbContext<DataContext>(options =>
                     {
                         options.UseSqlServer(config.GetConnectionString("DefaultConnection"));
                     });
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IUserLogin, UserLogin>();
            services.AddScoped(typeof(IGenericRepository<>), typeof(GenaricRepository<>));
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
            services.AddSingleton<MessageTracker>();
            services.AddSignalR();
            services.AddScoped<IUserRepository, UserRepository>();
            return services;
        }
    }
}