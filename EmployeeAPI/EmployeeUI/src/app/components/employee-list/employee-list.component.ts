import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeDto, FilterParams } from '../../models/employee.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EmployeeSearchComponent } from "../employee-search/employee-search.component";
@Component({
  selector: 'app-employee-list',
  imports: [MatDialogModule, CommonModule,
    MatFormFieldModule, MatInputModule, MatPaginatorModule, MatIconModule, MatTooltipModule,
    MatTableModule, FormsModule, CommonModule, MatSort, MatCardModule, MatProgressSpinnerModule,
    MatSelectModule, MatButtonToggleModule, EmployeeSearchComponent] ,
  standalone: true,
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'position', 'actions'];
  dataSource = new MatTableDataSource<EmployeeDto>();
  totalCount = 0;
  isLoading = false;
  selectedRow: number | null = null;
  filters: FilterParams = {
    pageNumber: 1,
    pageSize: 10,
    search: '',
    // position: '',
    sortBy: '',
    sortDescending: false
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private employeeService: EmployeeService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadEmployees();
    // this.sort.valueChanges.subscribe(() => this.applyFilter());
  }

  loadEmployees(): void {
    this.isLoading = true;
    this.employeeService.getFilteredEmployees(this.filters).subscribe({
      next: (response) => {
        console.log('Response:', response);
        this.dataSource.data = response.employees;
        this.totalCount = response.totalCount; 
        this.isLoading = false;
      },
      error: (err) => {
        this.employeeService.showError('Failed to load employees');
        this.isLoading = false;
      }
    });
  }
  resetFilters(): void {
    // Reset all filter values to their defaults
    this.filters = {
      search: '',
      
      pageNumber: 1,
      pageSize: 10,
      sortBy: '',
      sortDescending: false
    };
  
    // Reset the paginator
    if (this.paginator) {
      this.paginator.pageIndex = 0; // Reset to the first page
    }

  
    // Reload data with reset filters
    this.loadEmployees();
  
    // Optional: Show confirmation toast
    this.employeeService.showSuccess('Filters reset successfully');
  }
  selectRow(rowId: number): void {
    this.selectedRow = rowId;
  }
 
  onPageChange(event: PageEvent): void {
    this.filters.pageNumber = event.pageIndex + 1;
    this.filters.pageSize = event.pageSize;
    this.loadEmployees();
  }
  onSortChange(sort: { active: string; direction: string }): void {
    this.filters.sortBy = sort.active;
    this.filters.sortDescending = sort.direction === 'desc';
    this.loadEmployees();
  }

  applyFilter(): void {
    this.filters.pageNumber = 1; 
    this.loadEmployees(); 
  }
  openAddDialog(): void {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '500px',
      data: { mode: 'add' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadEmployees();
      }
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  openEditDialog(employee: EmployeeDto): void {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '500px',
      data: { mode: 'edit', employee }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadEmployees();
      }
    });
  }

  openDeleteDialog(id: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: { message: 'Are you sure you want to delete this employee?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.employeeService.deleteEmployee(id).subscribe({
          next: () => {
            this.employeeService.showSuccess('Employee deleted successfully');
            this.loadEmployees();
          },
          error: (err) => {
            this.employeeService.showError('Failed to delete employee');
          }
        });
      }
    });
  }
}