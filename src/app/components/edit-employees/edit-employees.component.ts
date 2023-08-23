import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Employees } from 'src/app/interface/employees';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.css']
})
export class EditEmployeesComponent implements OnInit {

  id!: Number;
  header!: string;

  constructor(private router: Router, private employeesService: EmployeesService, private route: ActivatedRoute) {
   

  }
  ngOnInit(): void {
    //this.id = +this.route.snapshot.paramMap.get('Id');
    this.header = this.id ===0? 'Add Employee' : 'Edit Employee';
  }
  

  onSubmit(form: NgForm){
    // console.log(form.value);
    let employees: Employees = {
      Id : form.value.Id,
      Firstname: form.value.Firstname,
      Lastname: form.value.Lastname,
      Age: form.value.Age,
      Job_title: form.value.Job_title,
      Email_Address: form.value.Email_Address
    }
    this.employeesService.addEmployees(employees);
    this.router.navigateByUrl("");
  }
}
