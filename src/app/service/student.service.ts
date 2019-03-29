import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getStudents(): Observable<any> {
    return this.http.get(environment.endpoint + 'Student').pipe(
      map(this.extractData));
  }

  getStudentByClassID(classID): Observable<any> {
    return this.http.get(environment.endpoint + 'GetStudentByClassID/' + classID).pipe(
      map(this.extractData));
  }

  getStudentsForGrouping(classID) : Observable<any>{
    return this.http.get(environment.endpoint + 'GetStudentsForGrouping/' + classID).pipe(
      map(this.extractData));
  }


  // downloadFile(data: Response) {
  //   const blob = new Blob([data], { type: 'application/octet-stream' });
  //   const url= window.URL.createObjectURL(blob);
  //   window.open(url);
  // }

  uploadFile(formData): Observable<any> {
    //const frmData = new FormData();
    return this.http.post(environment.endpoint + 'UploadFile', formData)
      .pipe(map(this.extractData));
  }
}


