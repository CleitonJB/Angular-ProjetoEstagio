import { Component, OnInit } from '@angular/core';

import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private dataService: DataService) { }

  ngOnInit() {}

  onLogin(){
    this.dataService.loginUser(this.loginUserData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}