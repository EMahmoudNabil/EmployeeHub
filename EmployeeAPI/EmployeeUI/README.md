# EmployeeHub



## Overview 🌟

A full-stack application for managing employee data, built with .NET Core Web API backend and Angular frontend.

[Watch Demo Video](https://youtu.be/ZMH_rOWMhck)

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

