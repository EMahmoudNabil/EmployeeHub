import { Component, Inject, OnInit } from '@angular/core';
import { CreateEmployeeDto, EmployeeDto, UpdateEmployeeDto } from '../../models/employee.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '../../services/employee.service';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-employee-form',
  imports: [MatDialogModule , FormsModule ,CommonModule,ReactiveFormsModule ,MatDividerModule,MatIconModule,
    MatFormFieldModule, MatInputModule],
 
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private dialogRef: MatDialogRef<EmployeeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mode: 'add' | 'edit', employee?: EmployeeDto }
  ) {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      position: ['', [Validators.required, Validators.maxLength(50)]]
    });
  }

  ngOnInit(): void {
    if (this.data.mode === 'edit' && this.data.employee) {
      this.employeeForm.patchValue({
        firstName: this.data.employee.firstName,
        lastName: this.data.employee.lastName,
        email: this.data.employee.email,
        position: this.data.employee.position
      });
    }
  }

  onSubmit(): void {
    if (this.employeeForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    const formValue = this.employeeForm.value;

    if (this.data.mode === 'add') {
      const createDto: CreateEmployeeDto = formValue;
      this.employeeService.createEmployee(createDto).subscribe({
        next: () => {
          this.employeeService.showSuccess('Employee created successfully');
          this.dialogRef.close(true);
        },
        error: (err) => {
          this.employeeService.showError('Failed to create employee');
          this.isSubmitting = false;
        }
      });
    } else {
      if (!this.data.employee) return;
      
      const updateDto: UpdateEmployeeDto = {
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        position: formValue.position
      };
      
      this.employeeService.updateEmployee(this.data.employee.id, updateDto).subscribe({
        next: () => {
          this.employeeService.showSuccess('Employee updated successfully');
          this.dialogRef.close(true);
        },
        error: (err) => {
          this.employeeService.showError('Failed to update employee');
          this.isSubmitting = false;
        }
      });
    }
  }

  get formControls() {
    return this.employeeForm.controls;
  }}