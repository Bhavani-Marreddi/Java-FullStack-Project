import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username = '';
  password = '';
  invalidLogin = false
  emessage = '';

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['homepage']);
      console.log("navigate..");
      this.invalidLogin = false;
    } else
      this.invalidLogin = true;
      this.emessage="Enter Correct Credentials";
  }
  

  goTosignup(){
    this.router.navigate(['singup']);
  }

  imageSrc = "../assets/loginpage.jpg"

}
