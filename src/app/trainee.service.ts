import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {

  constructor(private http: HttpClient) { }

  getUngroupedTrainees(): Observable<Person[]> {
    const url: string = 'http://localhost:8080/trainees?grouped=false';
    return this.http.get<Person[]>(url);
  }
}
