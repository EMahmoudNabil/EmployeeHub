import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: 'employee-list', pathMatch: 'full'},
    { path: 'employee-list', component:  EmployeeListComponent }, 
    {path: '**',  component:NotFoundComponent   }, // Wildcard route for a 404 page
    
];

