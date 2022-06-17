import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../services/user-service/user-service.service';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css']
})
export class UnlockAccountComponent implements OnInit {

  constructor(private service: UserServiceService) { }

  unlockAccount(data:NgForm){
    this.service.unlockAccount(data).subscribe(
      data=>{
        console.log(data);
      }, 
      err=>{
        console.log(err);
      }
    )
  }

  ngOnInit(): void {
  }

}
