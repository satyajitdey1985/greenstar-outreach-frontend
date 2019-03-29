import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import  {environment} from '../../environments/environment';

//const endpoint = 'https://localhost:44393/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HolidayCalendarService {

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getHolidays(): Observable<any> {
    return this.http.get(environment.endpoint + 'HolidayCalendar').pipe(
      map(this.extractData));
  }

  getHoliday(id): Observable<any> {
    return this.http.get(environment.endpoint + 'HolidayCalendar/' + id).pipe(
      map(this.extractData));
  }

  addHoliday (HolidayCalendar): Observable<any> {
    console.log(HolidayCalendar);
    return this.http.post<any>(environment.endpoint + 'HolidayCalendar', JSON.stringify(HolidayCalendar), httpOptions).pipe(
      tap((HolidayCalendar) => console.log(`added HolidayCalendar w/ id=${HolidayCalendar.id}`)),
      catchError(this.handleError<any>('addHolidayCalendar'))
    );
  }

  updateHoliday (id, HolidayCalendar): Observable<any> {
    return this.http.put(environment.endpoint + 'HolidayCalendar/' + id, JSON.stringify(HolidayCalendar), httpOptions).pipe(
      tap(_ => console.log(`updated HolidayCalendar id=${id}`)),
      catchError(this.handleError<any>('updateHolidayCalendar'))
    );
  }

  deleteHoliday (id): Observable<any> {
    return this.http.delete<any>(environment.endpoint + 'HolidayCalendar/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted HolidayCalendar id=${id}`)),
      catchError(this.handleError<any>('deleteHolidayCalendar'))
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