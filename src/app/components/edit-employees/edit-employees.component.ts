import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.css']
})
export class EditEmployeesComponent implements OnInit {

  id!: Number;
  header!: string;

  constructor(private route: ActivatedRoute) {
   

  }
  ngOnInit(): void {
    //this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id===0? 'Add Employee' : 'Edit Employee';
  }
  

  onSubmit(form: NgForm){

  }
}
