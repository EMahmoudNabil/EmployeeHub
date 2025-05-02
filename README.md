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
  <img src="https://github.com/user-attachments/assets/05ac25e4-2733-4a82-92ee-8d568b343312" alt="Stracture Screen" width="80%" />
  <p><em>Stracture App in API </em></p>

  <img src="https://github.com/user-attachments/assets/4817a8f1-fc5e-4e40-a189-76807300268e" alt="EndPoint API" width="80%" />
  <p><em>EndPoint API</em></p>

  
  <img src="https://github.com/user-attachments/assets/701243bd-dc0b-4802-af4c-6f5973efe770" alt="Main Form" width="80%" />
  <p><em>Main Form</em></p>
 <img src="https://github.com/user-attachments/assets/e3576f84-b0f9-46b6-9cc9-8eab5f0317f2" alt="Add Form" width="80%" />
  <p><em>Add Form</em></p>

 <img src="https://github.com/user-attachments/assets/95a474b5-02b1-4302-8ec9-4c94b4e449d5" alt="Edit Form" width="80%" />
  <p><em>Edit Form</em></p>

   <img src="https://github.com/user-attachments/assets/f03fc29b-6fb6-4ca8-9ca8-53ba9c7509d1" alt="Search " width="80%" />
  <p><em>Search</em></p>
  <img src="https://github.com/user-attachments/assets/3adf19a2-8d2e-498b-952b-3bf588a8f72b" alt="pagination " width="80%" />
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
