import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName : string = "Guest";
  password : string = "";
  age : number = 0;
  isMajor : boolean = false;

  userType : string = "eu";


  constructor(private router : Router) { }


  ngOnInit(): void {
  }

  displayName() : void{
    this.userName = "Dinesh";
    console.log(this.userName);
  }

  getName() : string{
    this.displayName();
    return this.userName;
  }

  validateLogin()
  {
    this.router.navigate(['/profile']);
  }

}
