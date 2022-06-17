import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registration } from '../models/registration';
import { UserServiceService } from '../services/user-service/user-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private registrationService: UserServiceService) { }

  registeredUser:Registration = new Registration();

  registerUser(data:NgForm){
    this.registrationService.registerUser(data).subscribe(
      data=>{
        this.registeredUser = data;
        console.log(this.registeredUser);
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
  }

}
