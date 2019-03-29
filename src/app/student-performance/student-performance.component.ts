import { Component, OnInit } from '@angular/core';
import { IState } from '../shared/models/state';
import { ICity } from '../shared/models/city';
import { ISchool } from '../shared/models/school';
import { IClassDetails } from '../shared/models/classDetails';
import { IStudent } from '../shared/models/student';
import { IParameterAttribute } from '../shared/models/paramterAttribute';
import { IStudentPerformance } from '../shared/models/studentPerformance';
import { CommonService } from "../service/common.service";
import { SchoolService } from '../service/school.service';
import { StudentService } from '../service/student.service';
import { StudentPerformanceService } from '../service/student-performance.service';
import { saveAs } from 'file-saver';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-performance',
  templateUrl: './student-performance.component.html',
  styleUrls: ['./student-performance.component.scss']
})
export class StudentPerformanceComponent implements OnInit {

  public stateList: IState[];
  public cityList: ICity[];
  public schoolList: ISchool[];
  public classDetailsList: IClassDetails[];
  public studentList: IStudent[];
  public paramAttrList: IParameterAttribute[];
  public studentPerformList: IStudentPerformance[];
  targetCheckBoxName: string;
  public studentResult: IStudentPerformance[] = [];
  public performanceDate: Date;
  public classID: number = 1;
  public downloadedFileName : string="";
  public serverPath :string = "https://localhost:44393";
  public templateFullPath : string ;


  public performDate: Date;

  selectedStateID: number;
  selectedCityID: number;
  selectedSchoolID: number;
  selectedStandard: number;
  selectedClassID: number;
  selectedStudentID: number;
  selectedAttributeID: number;

  constructor(
    private commonAPI: CommonService,
    private schoolAPI: SchoolService,
    private studentApi: StudentService,
    private studentPerformanceApi: StudentPerformanceService
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

  getStudentByClassID(classID) {
    this.studentApi.getStudentByClassID(classID).subscribe((data) => {
      this.studentList = data;
    })

    this.getParamters();
  }

  getParamters() {
    this.studentPerformanceApi.getParamters().subscribe((data) => {
      this.paramAttrList = data;
    })
  }

  updateSelectedParamValueChange(event, isChecked: boolean) {
    this.targetCheckBoxName = event.target.name;
    var performData: IStudentPerformance = {
      performID: 0,
      paramID: 0,
      studID: 0,
      point: false,
      performDate: new Date(Date.now())
    };

    let x = this.targetCheckBoxName.split("_");
    performData.point = isChecked;
    performData.paramID = +x[2];
    performData.studID = +x[1];
    performData.performDate = this.performanceDate;
    this.studentResult.push(performData);
    console.log(this.studentResult);
    console.log(performData.point + "," + performData.paramID + "," + performData.studID + "," + performData.performDate);
    //this.saveOrUpdatePerformance(this.performData);
  }

  getPerformance() {
    this.studentPerformanceApi.getPerformance().subscribe((data) => {
      this.studentResult = data;
    })
  }

  saveOrUpdatePerformance(performanceDataList) {
    //console.log(performanceDataList);
    // if (!performanceDataList[0].PerformID) {
    this.studentPerformanceApi.addPerformance(performanceDataList).subscribe((data) => {
      this.getPerformance();
    })
    // }
    // else {
    //   this.studentPerformanceApi.updatePerformance(performanceData.performID, performanceData).subscribe((data) => { this.getPerformance(); })
    // }
    //performanceDataList={};
  }

  //   errorMessage: string;
  //     filesToUpload: Array<File>;
  //     selectedFileNames: string[] = [];
  //     public isLoadingData: Boolean = false;

  //     uploadResult: any;
  //     res: Array<string>;
  //   fileChange(fileInput:any){
  //     this.uploadResult = "";
  //     this.filesToUpload = <Array<File>>fileInput.target.files;

  //     for (let i = 0; i < this.filesToUpload.length; i++)
  //     {
  //         this.selectedFileNames.push(this.filesToUpload[i].name);
  //     }
  //   this.studentApi.uploadFile().subscribe((data)=>{
  //     console.log("");
  //   })

  // }

  public progress: number;
  public message: string;
  upload(files) {
    console.log(files);
    if (files.length === 0)
      return;

    const formData = new FormData();

    for (let file of files)
      formData.append(file.name, file);



    this.studentApi.uploadFile(formData).subscribe((data) => {
      console.log(data);
    })

    // const uploadReq = new HttpRequest('POST', `api/upload`, formData, {
    //   reportProgress: true,
    // });

    // this.http.request(uploadReq).subscribe(event => {
    //   if (event.type === HttpEventType.UploadProgress)
    //     this.progress = Math.round(100 * event.loaded / event.total);
    //   else if (event.type === HttpEventType.Response)
    //     this.message = event.body.toString();
    // });
  }

  downloadTemplate() {
    const filename = 'file.xls';
    this.studentPerformanceApi.downloadTemplate(this.classID).subscribe(
      (data) => {
        this.downloadedFileName=data;
        //alert(this.downloadedFileName);
        this.templateFullPath = this.serverPath + this.downloadedFileName;
        //this.templateFullPath = this.downloadedFileName;
      },
      (err) => { }
    );
  }
}
