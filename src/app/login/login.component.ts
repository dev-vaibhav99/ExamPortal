import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../models/login';
import { UserServiceService } from '../services/user-service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:UserServiceService) { }

  login:Login = new Login();
  
  loginUser(data:NgForm){
    this.service.loginUser(data.value).subscribe(data=>{
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
