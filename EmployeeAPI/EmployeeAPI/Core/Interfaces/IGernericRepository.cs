using EmployeeAPI.Core.Entities;
using EmployeeAPI.DTOs;

namespace EmployeeAPI.Data.Interfaces
{

    // This interface defines the generic repository pattern for CRUD operations
    public interface IGernericRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task<T> GetByIdAsync(int id);
        Task AddAsync(T entity);
        void Update(T entity);
        void Delete(T entity);
     

    }
}
