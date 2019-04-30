import { Component, OnInit } from '@angular/core';
import { SchoolService } from "../service/school.service";
import { NgbModal, NgbDateStruct, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from "../service/common.service";
import { ICity } from '../shared/models/city';
import { ISchool } from '../school/school';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {

  schools = [];
  schoolForm={};
  closeResult: string;
  cityList: ICity[];


  constructor(private api: SchoolService, private modalService: NgbModal, private commonAPI: CommonService) { }

  ngOnInit() {
    this.getSchool();
    this.getCity();
  }

  getSchool() {
    this.api.getSchools().subscribe((data) => {
      this.schools = data;
    })
  }

  deleteSchool(id) {
    if (confirm("Do you want to delete?")) {

      this.api.deleteSchool(id).subscribe((data) => {
        this.getSchool();
      })
    }
  }

  open(content, data?:any) {
    if (data)
    {
      this.schoolForm = data;
    }

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  saveOrUpdateSchool(schoolData) {
    console.log(schoolData);
    if (!schoolData.schlID) {
      this.api.addSchool(schoolData).subscribe((data) => {
        this.getSchool();
      })
    }
    else {
      this.api.updateSchool(schoolData.schlID, schoolData).subscribe((data) => { this.getSchool(); })
    }
    this.schoolForm = {};
    this.modalService.dismissAll();
    // this.getSchool();
  }

  getCity() {
    this.commonAPI.getCity().subscribe((data) => {
      this.cityList = data;
    })
  }
}
