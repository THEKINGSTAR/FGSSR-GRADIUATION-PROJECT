namespace API.Helpers
{
    public class MapingProfiles : Profile
    {
        public MapingProfiles()
        {
            CreateMap<UpdateUserDto, User>();
            CreateMap<ProjectDto, UserProject>();
            CreateMap<TaskDto, Tasks>();
            CreateMap<NewTeamDto, Team>();
        }
    }
}