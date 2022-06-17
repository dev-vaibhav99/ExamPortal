import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Registration } from '../models/registration';
import { UserServiceService } from '../services/user-service/user-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private service: UserServiceService) { }
  
  reg:Registration = new Registration();
  registrationForm: FormGroup;

  countries:any;
  states:any;
  cities:any;

  ngOnInit(): void {
  
    this.registrationForm = new FormGroup({
      'reg.fname':new FormControl(),
      'reg.lname':new FormControl(),
      'reg.email':new FormControl(),
      'reg.phno':new FormControl(),
      'reg.dob':new FormControl(),
      'reg.gender':new FormControl(),
      'reg.countryId':new FormControl(),
      'reg.stateId':new FormControl(),
      'reg.cityId':new FormControl()
    })
    
    this.getCountries();
}

  registerUser(){
    this.service.registerUser(this.registrationForm.value).subscribe(
      data=>{
        this.reg = data;
        console.log(this.reg);
      },
      err => {
        console.log(err);
      }
    );
  }

  getCountries(){
    this.service.getCountries().subscribe(
      response=>{
        this.countries = response;
        console.log(response);
      },
      err=>{
        console.log(err)
      }
    )
  }

  getStateByCountryId(countryId:number){
    this.service.getStatesByCountryId(countryId).subscribe(
      response=>{
        this.states = response
      },
      err=>{
        console.log(err);
      }
    )
  }


  getCitiesByStateId(stateId:number){
    this.service.getCitiesByStateId(stateId).subscribe(
      response=>{
        this.cities = response;
      },
      err=>{
        console.log(err);
      }
    )
  }

}
