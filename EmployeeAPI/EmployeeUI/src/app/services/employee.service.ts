import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { EmployeeDto, CreateEmployeeDto, UpdateEmployeeDto, FilterParams } from '../models/employee.model';

import { ToastrService } from 'ngx-toastr';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = `${environment.apiUrl}/Employees`;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getAllEmployees(): Observable<EmployeeDto[]> {
    return this.http.get<EmployeeDto[]>(this.apiUrl);
  }
  getFilteredEmployees(filters: FilterParams): Observable<{ employees: EmployeeDto[], totalCount: number }> {

    let params = new HttpParams();

    if (filters.search) {
      params = params.set('search', filters.search);
    }
    
    // if (filters.position) {
    //   params = params.set('position', filters.position);
    // }
    
    if (filters.sortBy) {
      params = params.set('sortBy', filters.sortBy);
    }
  
  
    params = params
      .set('pageNumber', filters.pageNumber)
      .set('pageSize', filters.pageSize)
      .set('sortDescending', filters.sortDescending);
  
    if (params.keys().length > 3) { 
      return this.http.get<{ employees: EmployeeDto[], totalCount: number }>(
        `${this.apiUrl}/filter`,
        { params }
      );
    } else {

      return this.http.get<{ employees: EmployeeDto[], totalCount: number }>(
        `${this.apiUrl}/filter`
      );
    }
  }
  getEmployeeById(id: number): Observable<EmployeeDto> {
    return this.http.get<EmployeeDto>(`${this.apiUrl}/${id}`);
  }

  createEmployee(employee: CreateEmployeeDto): Observable<EmployeeDto> {
    return this.http.post<EmployeeDto>(this.apiUrl, employee);
  }

  updateEmployee(id: number, employee: UpdateEmployeeDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  showSuccess(message: string): void {
    this.toastr.success(message);
  }

  showError(message: string): void {
    this.toastr.error(message);
  }
}