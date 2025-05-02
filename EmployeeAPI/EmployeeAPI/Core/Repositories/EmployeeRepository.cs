using EmployeeAPI.Core.Entities;
using EmployeeAPI.Core.Interfaces;
using EmployeeAPI.DTOs;
using EmployeeAPI.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;

namespace EmployeeAPI.Core.Repositories
{
    // This class implements the IEmployeeRepository interface and provides methods to interact with the Employee entity.
    public class EmployeeRepository : GenericRepository<Employee>, IEmployeeRepository
    {
        public EmployeeRepository(EmployeeDbContext context) : base(context) { }

        // Get filtered employees with pagination and sorting
        public async Task<(List<Employee>, int)> GetFilteredEmployeesAsync(FilterParams filters)
        {
            var query = _context.Employees.AsQueryable();

            // Apply search
            if (!string.IsNullOrEmpty(filters.Search))
            {
                query = query.Where(e =>
                    e.FirstName.Contains(filters.Search) ||
                    e.LastName.Contains(filters.Search) ||
                    e.Email.Contains(filters.Search) ||
                    e.Position.Contains(filters.Search));
            }


            // Apply sorting
            query = filters.SortBy switch
            {
                "name" => filters.SortDescending ?
                    query.OrderByDescending(e => e.LastName).ThenByDescending(e => e.FirstName) :
                    query.OrderBy(e => e.LastName).ThenBy(e => e.FirstName),
                "email" => filters.SortDescending ?
                    query.OrderByDescending(e => e.Email) :
                    query.OrderBy(e => e.Email),
                _ => query.OrderBy(e => e.Id)
            };

            // Get total count before pagination
            var totalCount = await query.CountAsync();

            // Apply pagination
            var employees = await query
                .Skip((filters.PageNumber - 1) * filters.PageSize)
                .Take(filters.PageSize)
                .ToListAsync();

            return (employees, totalCount);
        }
    }
}
