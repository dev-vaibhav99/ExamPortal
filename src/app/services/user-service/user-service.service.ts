import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login';
import { Registration } from 'src/app/models/registration';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  baseUrl = "http://localhost:8080/";

  loginUser(login:Login):Observable<Login>{
    return this.http.post<Login>(this.baseUrl+"user/login",login);
  }

  registerUser(data:any):Observable<Registration>{
    return this.http.post<Registration>(this.baseUrl+"user/save",data);
  }

  forgotPassword(email:string){
    return this.http.post(this.baseUrl+`forgetPassword`,email);
  }

  unlockAccount(data:any){
    return this.http.post(this.baseUrl+`unlock-acc`,data);
  }
}
