import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/interface/employees';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees!: Employees[];


  constructor(private EmployeesService : EmployeesService) {
    
  }
  ngOnInit(): void {
   this.employees = this.EmployeesService.getAllEmployees();
  }

 
}
