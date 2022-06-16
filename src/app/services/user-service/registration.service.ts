import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from 'src/app/models/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  private baseUrl = "http://localhost/8888";

  registerUser(data:any):Observable<Registration>{
    return this.http.post<Registration>(this.baseUrl+"user/save",data);
  }
}
