using EmployeeAPI.Core.Entities;
using EmployeeAPI.Core.Repositories;
using EmployeeAPI.Data.Interfaces;

namespace EmployeeAPI.Core.Interfaces
{

    // this interface is used to define the contract for the UnitOfWork pattern
    public interface IUnitOfWork : IDisposable
    {
        EmployeeRepository EmployeeRepository { get; }
        Task<int> SaveAsync();

    }

}
