export interface EmployeeDto {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    position: string;
  }
  
  export interface CreateEmployeeDto {
    firstName: string;
    lastName: string;
    email: string;
    position: string;
  }
  
  export interface UpdateEmployeeDto {
    firstName: string;
    lastName: string;
    position: string;
  }
  
  export interface FilterParams {
    search: string;
    // position: string;
    pageNumber: number;
    pageSize: number;
    sortBy: string;
    sortDescending: boolean;
  }