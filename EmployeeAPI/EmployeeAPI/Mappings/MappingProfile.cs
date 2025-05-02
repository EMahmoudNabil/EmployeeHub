using AutoMapper;
using EmployeeAPI.Core.Entities;
using EmployeeAPI.DTOs;

namespace EmployeeAPI.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Employee, EmployeeDto>();
            CreateMap<CreateEmployeeDto, Employee>();
            CreateMap<UpdateEmployeeDto, Employee>();
        }

    }
}
