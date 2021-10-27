import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { user } from '../models/user.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url="http://localhost:3000/posts"

  constructor(private http: HttpClient) { }


  getUser(): Observable<user>{
    return this.http.get<user>(`${this.url}`);
  }
  creatUser(data: any){
    return this.http.post(`${this.url}`,data)
  }
  deleteUser(id: number){
   return this.http.delete(`${this.url}/${id}`)
  }
  getSigleUser(id: number){
    return this.http.get(`${this.url}/${id}`)
  }
  eitUser(id: number,data: any){
   return this.http.put(`${this.url}/${id}`,data)
  }
}
