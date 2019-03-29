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
export class SchoolService {

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getSchools(): Observable<any> {
    return this.http.get(environment.endpoint + 'Schools').pipe(
      map(this.extractData));
  }

  getSchool(id): Observable<any> {
    return this.http.get(environment.endpoint + 'Schools/' + id).pipe(
      map(this.extractData));
  }

  getSchoolByCity(cityId): Observable<any> {
    return this.http.get(environment.endpoint + 'GetSchoolByCity/' + cityId).pipe(
      map(this.extractData));
  }

  getClassBySchool(schoolID): Observable<any> {    
    return this.http.get(environment.endpoint + 'GetClassBySchool/' + schoolID).pipe(
      map(this.extractData));
      //console.log(this.extractData);
  }


  addSchool (School): Observable<any> {
    console.log(School);
    return this.http.post<any>(environment.endpoint + 'Schools', JSON.stringify(School), httpOptions).pipe(
      tap((School) => console.log(`added School w/ id=${School.schlID}`)),
      catchError(this.handleError<any>('addSchool'))
    );
  }

  updateSchool (id, School): Observable<any> {
    return this.http.put(environment.endpoint + 'Schools/' + id, JSON.stringify(School), httpOptions).pipe(
      tap(_ => console.log(`updated School id=${id}`)),
      catchError(this.handleError<any>('updateSchool'))
    );
  }

  deleteSchool (id): Observable<any> {
    return this.http.delete<any>(environment.endpoint + 'Schools/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted School id=${id}`)),
      catchError(this.handleError<any>('deleteSchool'))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}