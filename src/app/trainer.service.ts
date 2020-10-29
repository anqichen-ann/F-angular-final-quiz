import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http: HttpClient) { }

  getUngroupedTrainers(): Observable<Person[]> {
    const url: string = 'http://localhost:8080/trainers?grouped=false';
    return this.http.get<Person[]>(url);
  }

}



