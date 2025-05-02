# EmployeeHub



## Overview 🌟

A full-stack application for managing employee data, built with .NET Core Web API backend and Angular frontend.

[Watch Demo Video](https://youtu.be/ZMH_rOWMhck)

## Key Features ✨

- View a list of all employees
- Add new employees
- Edit existing employee information
- Delete employees
- Search and filter employees by various criteria
- Pagination for better performance with large datasets
- Form validation for data integrity

## Technologies Used 🛠️

### Backend
- .NET Core Web API
- Entity Framework Core
- SQL Server

### Frontend
- Angular
- Angular Material / Bootstrap

## Prerequisites 📋

- [.NET 9.0 SDK](https://dotnet.microsoft.com/download/dotnet/9.0) or later
- [Node.js](https://nodejs.org/) (v14 or later) with npm
- [Angular CLI](https://angular.io/cli)
- [SQL Server Express](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) or SQL Server (any edition)
- Visual Studio 2022 (recommended) or Visual Studio Code

## Getting Started 🚀

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/EmployeeHub.git
   cd EmployeeHub
   cd EmployeeAPI
  
   ```

2. **Configure the database connection**
   - Open the `appsettings.json` file in the backend project
   - Update the connection string to match your SQL Server instance:
   ```json
   "ConnectionStrings": {
     "con": "Data Source=YOUR-SERVER-NAME\\SQLEXPRESS;Initial Catalog=EmployeeAPI;Integrated Security=True;Encrypt=False; trust server certificate = true;"
   }
   ```
   Apply database migrations using Package Manager Console:
  ```bash
   
   Update-Database
  ```  
   Or using .NET CLI:
  ```bash  
   dotnet ef database update
  ```
3. **Run the backend**
   - Open the solution in Visual Studio and press F5, or
   - Navigate to the backend directory and run:
   ```bash
   dotnet restore
   dotnet build
   dotnet run
   ```
   - The API will be available at `https://localhost:7257/api`

### Frontend Setup

1. **Navigate to the Angular project directory**
   ```bash
   cd EmployeeUI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify API URL configuration**
   - Check the `environment.ts` file to ensure the API URL is correct:
   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'https://localhost:7257/api',
   };
   ```

4. **Start the Angular application**
   ```bash
   npm start
   ```
   - The application will open in your default browser at `http://localhost:4200`

## API Endpoints 🔌

- `GET /api/Employees` - Get all employees
- `GET /api/Employees/filter?search=...&position=...&pageNumber=...&pageSize=...` - Get filtered employees with pagination
- `GET /api/Employees/{id}` - Get a specific employee by ID
- `POST /api/Employees` - Create a new employee
- `PUT /api/Employees/{id}` - Update an existing employee
- `DELETE /api/Employees/{id}` - Delete an employee

## Screenshots 📸

<div align="center">
  <img src="https://github.com/user-attachments/assets/adcb5b41-4855-40c6-8be6-675e7c9f86a0" alt="Stracture Screen" width="80%" />
  <p><em>Stracture App in API </em></p>

  <img src="https://github.com/user-attachments/assets/20cf64ef-57b5-494e-825b-7cef673a4695" alt="EndPoint API" width="80%" />
  <p><em>EndPoint API</em></p>

  
  <img src="https://github.com/user-attachments/assets/a4c10716-9591-423b-a3fd-53649f0b97d0" alt="Main Form" width="80%" />
  <p><em>Main Form</em></p>
 <img src="https://github.com/user-attachments/assets/4fed4b11-4dbd-4871-af4b-4caa4cb19987" alt="Add Form" width="80%" />
  <p><em>Add Form</em></p>

 <img src="https://github.com/user-attachments/assets/625b9f12-b578-40ae-93f0-4b36999768f9" alt="Edit Form" width="80%" />
  <p><em>Edit Form</em></p>

   <img src="https://github.com/user-attachments/assets/641baf41-5331-42fd-ab3b-4dcd67da6020" alt="Search " width="80%" />
  <p><em>Search</em></p>
  <img src="https://github.com/user-attachments/assets/85716315-172c-4fdb-852c-169d6f005e1b" alt="pagination " width="80%" />
  <p><em>pagination</em></p>
  
</div>

## Usage 💻

1. View the list of employees on the main page
2. Click "Add Employee" to create a new employee record
3. Click the edit icon next to an employee to modify their details
4. Click the delete icon to remove an employee
5. Use the search and filter functionalities to find specific employees
6. Navigate between pages using the pagination controls

## Acknowledgments 🙏

- Angular Material/Bootstrap for UI components
- .NET Core Web API for the backend implementation
- Entity Framework Core for database operations
