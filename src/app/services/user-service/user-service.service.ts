import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login';
import { Registration } from 'src/app/models/registration';
import { UnlockAccount } from 'src/app/models/unlock-account';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  baseUrl = "http://localhost:9090/";

  loginUser(login:Login):Observable<Login>{
    return this.http.post<Login>(this.baseUrl+"user/login",login);
  }

  registerUser(data:Registration):Observable<Registration>{
    return this.http.post<Registration>(this.baseUrl+"saveUser",data);
  }

  forgotPassword(email:string){
    return this.http.post(this.baseUrl+`forgetPassword`,email);
  }

  unlockAccount(data:any):Observable<UnlockAccount>{
    return this.http.post<UnlockAccount>(this.baseUrl+`unlock-acc`,data);
  }

  getCountries(){
    return this.http.get(this.baseUrl+`countries`);
  }

  getStatesByCountryId(countryId:number){
    return this.http.get(this.baseUrl+`states/${countryId}`)
  }

  getCitiesByStateId(stateId:number){
    return this.http.get(this.baseUrl+`cities/${stateId}`)
  }
}
