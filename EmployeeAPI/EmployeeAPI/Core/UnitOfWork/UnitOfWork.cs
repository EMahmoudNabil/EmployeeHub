using EmployeeAPI.Core.Entities;
using EmployeeAPI.Core.Interfaces;
using EmployeeAPI.Core.Repositories;
using EmployeeAPI.Data.Interfaces;
using EmployeeAPI.Infrastructure.Data;

namespace EmployeeAPI.Core.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly EmployeeDbContext _context;
        private EmployeeRepository _employeeRepository;

        public UnitOfWork(EmployeeDbContext context)
        {
            _context = context;
        }


        /****************  loading the EmployeeRepository *************************/
        EmployeeRepository IUnitOfWork.EmployeeRepository =>  _employeeRepository ??= new EmployeeRepository(_context);


        /****************  This method is used to save changes to the database asynchronously  *************************/
        public async Task<int> SaveAsync()
        {
            return await _context.SaveChangesAsync();
        }
        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
