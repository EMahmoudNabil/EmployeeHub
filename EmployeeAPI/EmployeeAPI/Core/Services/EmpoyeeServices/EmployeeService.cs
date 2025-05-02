using AutoMapper;
using EmployeeAPI.Core.Entities;
using EmployeeAPI.Core.Interfaces;
using EmployeeAPI.Core.Repositories;
using EmployeeAPI.DTOs;

namespace EmployeeAPI.Core.Services.EmployeeServices
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public EmployeeService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }
        // This method to get all employees
        public async Task<IEnumerable<EmployeeDto>> GetAllEmployeesAsync()
        {
            var employees = await _unitOfWork.EmployeeRepository.GetAllAsync();
            return _mapper.Map<IEnumerable<EmployeeDto>>(employees);
        }

        // This method to get employee by id
        public async Task<EmployeeDto> GetEmployeeByIdAsync(int id)
        {
            var employee = await _unitOfWork.EmployeeRepository.GetByIdAsync(id);
            return _mapper.Map<EmployeeDto>(employee);
        }

        // This method to get filtered employees
        public async Task<(IEnumerable<EmployeeDto>, int)> GetFilteredEmployeesAsync(FilterParams filters)
        {
            var (employees, totalCount) = await _unitOfWork.EmployeeRepository.GetFilteredEmployeesAsync(filters);
            return (_mapper.Map<IEnumerable<EmployeeDto>>(employees), totalCount);
        }

        // This method to create employee
        public async Task<EmployeeDto> CreateEmployeeAsync(CreateEmployeeDto createEmployeeDto)
        {
            var employee = _mapper.Map<Employee>(createEmployeeDto);
            await _unitOfWork.EmployeeRepository.AddAsync(employee);
            await _unitOfWork.SaveAsync();
            return _mapper.Map<EmployeeDto>(employee);
        }

        // This method to update employee
        public async Task UpdateEmployeeAsync(int id, UpdateEmployeeDto updateEmployeeDto)
        {
            var employee = await _unitOfWork.EmployeeRepository.GetByIdAsync(id);
            if (employee == null) throw new KeyNotFoundException("Employee not found");

            _mapper.Map(updateEmployeeDto, employee);
            _unitOfWork.EmployeeRepository.Update(employee);
            await _unitOfWork.SaveAsync();
        }

        // This method to delete employee
        public async Task DeleteEmployeeAsync(int id)
        {
            var employee = await _unitOfWork.EmployeeRepository.GetByIdAsync(id);
            if (employee == null) throw new KeyNotFoundException("Employee not found");

            _unitOfWork.EmployeeRepository.Delete(employee);
            await _unitOfWork.SaveAsync();
        }
    }

}
