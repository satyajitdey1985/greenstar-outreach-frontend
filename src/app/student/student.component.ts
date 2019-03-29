import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbDateStruct, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { IStudent } from "../student/student";
import { StudentService } from "../service/student.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  students:IStudent[];  

  constructor(private api:StudentService) { }

  ngOnInit() {
    this.getStudent();
  }

  getStudent() {
    this.api.getStudents().subscribe((data) => {
      this.students = data;      
    }) 
  }

}
