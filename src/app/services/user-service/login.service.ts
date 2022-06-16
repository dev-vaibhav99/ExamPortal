import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://localhost:8080/"

  loginUser(login:Login):Observable<Login>{
    return this.http.post<Login>(this.baseUrl+"user/login",login);
  }
}
