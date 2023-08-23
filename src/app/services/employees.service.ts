import { Injectable } from '@angular/core';
import { Employees } from 'src/app/interface/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employees: Employees[] = [
  {
    Id: 1,
    Firstname: "Tshepo",
    Lastname: "Mola",
    Age: 22,
    Job_title: "Developer",
    Email_Address: "Mola.tshepok@gmail.com"
  },
  {
    Id: 2,
    Firstname: "Thabang",
    Lastname: "Mabotja",
    Age: 22,
    Job_title: "Nurse",
    Email_Address: "Molatshep04@gmail.com"
  },
  {
    Id: 3,
    Firstname: "Kingsley",
    Lastname: "Pietersen",
    Age: 20,
    Job_title: "Teacher",
    Email_Address: "Kingsley@gmail.com"
  },
  {
    Id: 4,
    Firstname: "Lucky",
    Lastname: "Smith",
    Age: 42,
    Job_title: "Soldier",
    Email_Address: "Lucky04@gmail.com"
  }
  ];  //

  constructor() { }

  getAllEmployees(){
    return this.employees;
  }
  addEmployees(employees: Employees){
    return this.employees.push(employees);
  }
}
