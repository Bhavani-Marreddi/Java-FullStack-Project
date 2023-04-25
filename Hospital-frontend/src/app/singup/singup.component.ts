import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
 constructor(private router: Router){}
 toRegister(){
  var status=confirm("registered success");;
  if (status==true){
    this.router.navigate(['login']);
  }
  else{
    this.router.navigate(['singup']);
  }
 }

 backClicked(){
  this.router.navigate(['login']);
 }

 imageSrc = "../assets/4.jpg"

}