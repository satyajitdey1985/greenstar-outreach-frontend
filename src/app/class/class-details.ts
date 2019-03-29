import { ISchool } from "../school/school";

export interface IClassDetails{
    ClassID:number; 
    schlID:number;
    school:ISchool;
    classStandard:number;
    SectName:string;
    SectStrength:string;
    SectPOCName:string;
    SectPOCEmailID:string;
    SectPOCContactNo:string;
    CreatedBy:number;
    CreatioinDate:string;
    ModifyBy:string;
    ModifyDate:string;
}