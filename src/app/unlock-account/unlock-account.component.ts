import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { UserServiceService } from '../services/user-service/user-service.service';
import { UnlockAccount } from '../models/unlock-account';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css']
})
export class UnlockAccountComponent implements OnInit {

  form:FormGroup;
  model:UnlockAccount = new UnlockAccount();

  constructor(private service: UserServiceService) { }

  unlockAccount(){
    this.service.unlockAccount(this.form.value).subscribe(
      data=>{
        this.model = data;
        console.log(data);
      }, 
      err=>{
        console.log(err);
      }
    )
  }

  ngOnInit(): void {

    this.form = new FormGroup({
      'model.email':new FormControl(),
      'model.temporaryPassword':new FormControl(),
      'model.newPassword':new FormControl(),
      'model.confirmPassword':new FormControl()
    })
  }
}
