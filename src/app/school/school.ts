import {ICity} from "../shared/models/city";

export interface ISchool{
    schlID:number;
    schoolName:string;
    schlAddress1 :string;
    schlAddress2 :string;
    schlAddress3 :string;
    schlZip:string;
    schlTeleNo :string;
    schlMobileNo:string;
    schlMailID :string;
    schlPOCName:string;
    schlLongitude:string;
    schlLatitude :string;      
    cityId:number;
    city: ICity;
}