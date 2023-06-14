namespace API.Helpers
{
    public class MapingProfiles : Profile
    {
        public MapingProfiles()
        {
            CreateMap<UpdateUserDto, User>();
        }
    }
}