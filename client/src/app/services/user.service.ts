import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

const allPath = 'http://localhost:5000/users/all';
const delPath = 'http://localhost:5000/users/delete/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]>{
    return this.http.get<User[]>(allPath)
  }

  removeUser(id){
    console.log(id)
    return this.http.delete(delPath + id)
  }
}
