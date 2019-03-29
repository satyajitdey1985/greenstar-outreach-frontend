import { Component, OnInit } from '@angular/core';
import { IState } from '../shared/models/state';
import { ICity } from '../shared/models/city';
import { ISchool } from '../shared/models/school';
import { IClassDetails } from '../shared/models/classDetails';
import { CommonService } from "../service/common.service";
import { SchoolService } from '../service/school.service';
import { GroupService } from '../service/group.service';
import { IGroupWithMembers } from '../shared/models/groupWithMembers';
import { IGroup } from '../shared/models/group';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IStudent } from '../student/student';
import { StudentService } from '../service/student.service';


@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {

  public stateList: IState[];
  public cityList: ICity[];
  public schoolList: ISchool[];
  public classDetailsList: IClassDetails[];
  public groupsDetailsWithMembers: IGroupWithMembers[];
  public studentsList: IStudent[];

  selectedStateID: number;
  selectedCityID: number;
  selectedSchoolID: number;
  selectedStandard: number;
  selectedClassID: number;
  groupName: string;
  targetCheckBoxName: string;
  groupForm: IGroupWithMembers;
  modifiedGroupForm : IGroupWithMembers;

  constructor(
    private commonAPI: CommonService,
    private schoolAPI: SchoolService,
    private groupAPI: GroupService,
    private modalService: NgbModal,
    private studentApi: StudentService
  ) {    

   }



  ngOnInit() {
    this.getState();
  }

  getState() {
    this.commonAPI.getState().subscribe((data) => {
      this.stateList = data;
    })
  }

  getCityByStateID(stateId) {
    this.commonAPI.getCityByStateID(stateId).subscribe((data) => {
      this.cityList = data;
    })
  }

  getSchoolByCity(cityId) {
    this.schoolAPI.getSchoolByCity(cityId).subscribe((data) => {
      this.schoolList = data;
    })
  }

  getClassBySchool(schoolID) {
    this.schoolAPI.getClassBySchool(schoolID).subscribe((data) => {
      this.classDetailsList = data;
    })
  }

  getGroupStudents(classID) {
    this.groupAPI.getGroupStudents(classID).subscribe((data) => {
      //console.log(data);
      this.groupsDetailsWithMembers = data;
    })
  }

  getStudentsForGrouping(classID) {
    this.studentApi.getStudentsForGrouping(classID).subscribe((data) => {
      this.studentsList = data;
    })
  }

  addGroup(group_Name) {
    var groupDetails: IGroup = {
      groupName: "",
      groupID: 0,
      classID: 0
    };
    groupDetails.groupName = group_Name;
    groupDetails.classID = this.selectedClassID;
    console.log(groupDetails);
    this.groupAPI.addGroup(groupDetails).subscribe((data) => {
      this.getGroupStudents(this.selectedClassID);
    })
  }

  addGroupStudentMapping(groupStudentArray) {    
    this.groupAPI.addGroupStudentMapping(groupStudentArray).subscribe((data) => {
      this.getGroupStudents(this.selectedClassID);
    })
  }


  open(content, data) {
    if (data) {
      this.groupForm = data;
    }
    this.getStudentsForGrouping(this.selectedClassID);
      //this.closeResult = `Closed with: ${result}`;
      console.log(this.studentsList);
    
      // this.modifiedGroupForm.group = {
      //   groupName:"",
      //   groupID:0,  
      //   classID:0
      // };    

    // this.modifiedGroupForm.group.groupName = this.groupForm.group.groupName;
    // this.modifiedGroupForm.group.groupID = this.groupForm.group.groupID;  
    // this.modifiedGroupForm.group.classID=this.groupForm.group.classID;
    // //this.modifiedGroupForm.members = 
    // for (let student of this.groupForm.members) {
    //   this.modifiedGroupForm.members.push(student);
    //   }
    // console.log(this.modifiedGroupForm);

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {            
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      
    });
  }

  UpdateStudentListInGroup(isChecked: boolean, studData: IStudent) {

    // this.targetCheckBoxName = event.target.name;

    if (isChecked) {
      this.groupForm.members.push(studData);
      //console.log(studData.RollNo);
    }
    else {
      if (this.groupForm.members.find(x => x == studData)) {
        this.groupForm.members.splice(this.groupForm.members.findIndex(x => x == studData), 1);
      }
    }    
    
  }
  //this.saveOrUpdatePerformance(this.performData);
}

