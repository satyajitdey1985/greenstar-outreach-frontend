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
export class GroupService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getGroupStudents(classID): Observable<any> {
    return this.http.get(environment.endpoint + 'GetGroupStudentsByClass/'+ classID).pipe(
      map(this.extractData));
  }

  addGroup(groupDetails): Observable<any> {
    //console.log(groupDetails);
    return this.http.post<any>(environment.endpoint + 'GroupDetails', JSON.stringify(groupDetails), httpOptions).pipe(
      tap((groupDetails) => console.log(`added Group Details w/ id=${groupDetails.groupID}`)),
      catchError(this.handleError<any>('addGroup'))
    );
  }

  addGroupStudentMapping(groupStudentsList):Observable<any>{
    console.log(groupStudentsList);
    return this.http.post<any>(environment.endpoint + 'GroupStudentMapping', JSON.stringify(groupStudentsList), httpOptions).pipe(
      tap((groupDetails) => console.log(`added Group Details w/ id=${groupStudentsList.group.groupID}`)),
      catchError(this.handleError<any>('addGroup'))
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