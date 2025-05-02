using EmployeeAPI.DTOs;

namespace EmployeeAPI.Core.Services.EmployeeServices
{
    // this interface is used to define the contract for employee services
    public interface IEmployeeService
    {
        Task<IEnumerable<EmployeeDto>> GetAllEmployeesAsync();
        Task<EmployeeDto> GetEmployeeByIdAsync(int id);
        Task<(IEnumerable<EmployeeDto>, int)> GetFilteredEmployeesAsync(FilterParams filters);
        Task<EmployeeDto> CreateEmployeeAsync(CreateEmployeeDto createEmployeeDto);
        Task UpdateEmployeeAsync(int id, UpdateEmployeeDto updateEmployeeDto);
        Task DeleteEmployeeAsync(int id);
    }
}
