using EmployeeAPI.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace EmployeeAPI.Infrastructure.Data
{
    public class EmployeeDbContext : DbContext
    {
        public EmployeeDbContext(DbContextOptions<EmployeeDbContext> options) : base(options)
        {
        }
       
        public DbSet<Employee> Employees { get; set; }
    }

}
