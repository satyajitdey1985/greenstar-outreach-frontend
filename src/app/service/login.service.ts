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
export class LoginService {

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

 

  login(user): any {
    console.log(user);
    return this.http.post<any>(environment.endpoint + 'User', JSON.stringify(user), httpOptions).pipe(
      tap((user) =>{
        console.log(user);
          localStorage.setItem('isLoggedin',JSON.stringify(user)); 
          console.log(`added User w/ id=user`,user);
        }),
      catchError(this.handleError<any>('addSchool'))
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