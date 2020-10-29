import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {
  BASIC_URL: string = 'http://localhost:8080/trainees';

  constructor(private http: HttpClient) { }

  getUngroupedTrainees(): Observable<Person[]> {
    const url: string = 'http://localhost:8080/trainees?grouped=false';
    return this.http.get<Person[]>(url);
  }

  createTrainee(trainee: Person): Observable<Person> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<Person>(this.BASIC_URL, trainee, httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occured: ', error.error.message);
    } else {
      console.error(
        `error status code: ${error.status}, body: ${error.error}`
      );
    }
    return throwError('Something wrong happened')
  }
}
