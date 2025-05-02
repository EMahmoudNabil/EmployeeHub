using EmployeeAPI.Core.Entities;
using EmployeeAPI.Data.Interfaces;
using EmployeeAPI.DTOs;

namespace EmployeeAPI.Core.Interfaces
{
    public interface IEmployeeRepository : IGernericRepository<Employee>
    {

        //  This method is used to get a list of employees based on the provided filter parameters
        Task<(List<Employee>, int)> GetFilteredEmployeesAsync(FilterParams filters);

    }

}
