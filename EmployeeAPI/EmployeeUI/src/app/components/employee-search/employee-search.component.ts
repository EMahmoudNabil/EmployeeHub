import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterParams } from '../../models/employee.model';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-search',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent {
  @Input() filters: FilterParams = {
    pageNumber: 1,
    pageSize: 10,
    search: '',
    sortBy: '',
    sortDescending: false
  };

  @Output() searchApplied = new EventEmitter<void>();
  @Output() searchReset = new EventEmitter<void>();
  
  applyFilter(): void {
    this.searchApplied.emit();
  }

  resetFilters(): void {
    this.filters.search = '';
    this.searchReset.emit();
  }
}