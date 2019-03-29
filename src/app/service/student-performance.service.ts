import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

// const httpOptions = {
//     headers: new HttpHeaders({
//         'responseType': 'ResponseContentType.Blob',
//         'Content-Type': 'application/vnd.ms-excel'
//     })
// };

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StudentPerformanceService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getParamters(): Observable<any> {
    return this.http.get(environment.endpoint + 'ParameterAttribute').pipe(
      map(this.extractData));
  }

  addPerformance(Performance): Observable<any> {
    console.log(JSON.stringify(Performance));
    return this.http.post<any>(environment.endpoint + 'PerformanceCount', JSON.stringify(Performance), httpOptions).pipe(
      tap((Performance) => console.log(`added PerformanceCount w/ id=${Performance.performID}`)),
      catchError(this.handleError<any>('addPerformanceCount'))
    );
  }

  updatePerformance(id, Performance): Observable<any> {
    return this.http.put(environment.endpoint + 'PerformanceCount/' + id, JSON.stringify(Performance), httpOptions).pipe(
      tap(_ => console.log(`updated Performance id=${id}`)),
      catchError(this.handleError<any>('updatePerformance'))
    );
  }

  getPerformance(): Observable<any> {
    return this.http.get(environment.endpoint + 'PerformanceCount').pipe(
      map(this.extractData));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  downloadTemplate(classID): Observable<any> {
    httpOptions.headers.set('Access-Control-Allow-Origin', "*")
    return this.http.get(environment.endpoint + 'DownloadTemplate/'+classID, httpOptions)
      .pipe(map(this.extractData));
  }
}