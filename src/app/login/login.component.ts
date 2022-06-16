import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../models/login';
import { LoginService } from '../services/user-service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  login:Login = new Login();
  
  loginUser(data:NgForm){
    this.loginService.loginUser(data.value).subscribe(data=>{
      this.login = data;
      console.log(this.login);
    },
    err=>{
      console.log(err);
      
    });
  }

  ngOnInit(): void {
  }

}
