import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
BASIC_URL: string = 'http://localhost:8080/trainers';
  constructor(private http: HttpClient) { }

  getUngroupedTrainers(): Observable<Person[]> {
    const url: string = `${this.BASIC_URL}?grouped=false`;
    return this.http.get<Person[]>(url);
  }

  createTrainer(trainer: Person): Observable<Person> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<Person>(this.BASIC_URL, trainer, httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }


  // TODO GTB-4: - 相似处理函数可以考虑提取通用工具方法
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



