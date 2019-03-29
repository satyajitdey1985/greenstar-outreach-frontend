import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient ) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  
  getCity(): Observable<any> {
    return this.http.get(environment.endpoint + 'City').pipe(
      map(this.extractData));
  }

  getCityByStateID(id): Observable<any> {
    return this.http.get(environment.endpoint + 'GetCityByState/' + id).pipe(
      map(this.extractData));
  }

  getState(): Observable<any> {
    return this.http.get(environment.endpoint + 'State').pipe(
      map(this.extractData));
  }
}
