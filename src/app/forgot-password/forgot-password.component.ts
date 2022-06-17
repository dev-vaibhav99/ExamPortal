import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../services/user-service/user-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private service:UserServiceService) { }

  email:string;
  forgotPassword(data:NgForm){
    this.service.forgotPassword(this.email).subscribe(
      data => {
        console.log(data);
      }, 
      err => {
        console.log(err);
      }
    )
  }
  ngOnInit(): void {
  }

}
