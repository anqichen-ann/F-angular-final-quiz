import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {
  // TODO GTB-4: + BASIC_URL实践合理
  BASIC_URL: string = 'http://localhost:8080/trainees';

  constructor(private http: HttpClient) { }

  getUngroupedTrainees(): Observable<Person[]> {
    // TODO GTB-4: - 应该用模版字符串复用BASIC_URL
    const url: string = 'http://localhost:8080/trainees?grouped=false';
    return this.http.get<Person[]>(url);
  }

  // TODO GTB-3: - 创建接口只需要名字，方法参数不应该是Person类型，可以是name字符串类型或者{name: string}形式的对象字面量类型
  createTrainee(trainee: Person): Observable<Person> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<Person>(this.BASIC_URL, trainee, httpOptions)
    .pipe(
      // TODO GTB-3: + Service层处理通用错误，operator运用合理。
      catchError(this.handleError)
    )
  }

  // TODO GTB-4: - console.log不应出现在最终代码里
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
