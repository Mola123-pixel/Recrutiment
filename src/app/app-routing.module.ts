import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { EditEmployeesComponent } from './components/edit-employees/edit-employees.component';

const routes: Routes = [
  {
    path: "", component: EmployeesComponent
  },
  {
    path: "employee/Edit/:id", component: EditEmployeesComponent
  },
  {
    path: "employee/Add/:id", component: EditEmployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
