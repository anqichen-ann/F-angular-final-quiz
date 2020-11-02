import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from './group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  BASIC_URL: string = 'http://localhost:8080/groups';

  constructor(private http: HttpClient) { }

  // TODO GTB-1: 分组接口应该考虑异常情况
  group(): Observable<Group[]>{
    const url: string = `${this.BASIC_URL}/auto-grouping`;
    return this.http.get<Group[]>(url);
  }
}
