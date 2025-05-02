
using EmployeeAPI.Core.Interfaces;
using EmployeeAPI.Core.Repositories;
using EmployeeAPI.Core.Services.EmployeeServices;
using EmployeeAPI.Core.UnitOfWork;
using EmployeeAPI.Infrastructure.Data;
using EmployeeAPI.Mappings;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace EmployeeAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string txt = "";
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            builder.Services.AddOpenApi();


           
            /*************************    add DBContext           *********************/
      
            builder.Services.AddDbContext<EmployeeDbContext>(options =>
            {

                options.UseSqlServer(
                      builder.Configuration.GetConnectionString("con"),
                      sqlOptions =>
                      {
                          sqlOptions.MigrationsAssembly(typeof(EmployeeDbContext).Assembly.FullName);
                          sqlOptions.EnableRetryOnFailure(
                              maxRetryCount: 5,
                              maxRetryDelay: TimeSpan.FromSeconds(30),
                              errorNumbersToAdd: null);
                      });

            });

            /*************************    add Repositories and UnitOfWork           *********************/

            builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
            builder.Services.AddScoped<IEmployeeService, EmployeeService>();
            builder.Services.AddScoped<IEmployeeRepository, EmployeeRepository>();
            /*************************    add AutoMapper           *********************/
            builder.Services.AddAutoMapper(typeof(MappingProfile));

            /*******************************  add this line to enable CORS    ***********************************************/
            builder.Services.AddCors(options =>
             {
                 options.AddPolicy(txt,
                 builder =>
                 {
                     builder.AllowAnyOrigin();
                     builder.AllowAnyMethod();
                     builder.AllowAnyHeader();
                 });
             });



            var app = builder.Build();
            app.UseCors(txt);


            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                // add swagger
                app.MapOpenApi();
                app.UseSwaggerUI(op => op.SwaggerEndpoint("/openapi/v1.json", "v1"));//enable swagger
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
