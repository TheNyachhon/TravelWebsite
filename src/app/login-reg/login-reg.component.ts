import { Component } from '@angular/core';
import { User } from 'user';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent {

  //images
  images = [
    "./assets/AerialViewOfKTM.jpg",
    "./assets/boudhaStupa.jpg",
    "./assets/boudhaStupa2.jpg",
    "./assets/candles.jpg",
    "./assets/mangalbazar.jpg",
    "./assets/mangalbazar2.jpg",
    "./assets/mangalbazar3.jpg",
    "./assets/mangalbazar4.jpg",
    "./assets/mangalbazar5.jpg",
    "./assets/NationalParkLangtang.jpg",
    "./assets/pashupati-aarti.jpg",
    "./assets/pokhara-phewataal.jpg",
    "./assets/lakhey.jpg",
    "./assets/lakhey2.jpg",
  ]

  username: string = "";
  password: string = "";

  constructor(private authService: AuthenticationService,private router: Router) { }

  // Login user
  login(){
    if(this.username=="" || this.password=="" ){
      alert("Please enter both fields!")
    }
    this.authService.isLoggedIn = this.authService.loginUser(this.username,this.password)
    if(this.authService.isLoggedIn==true){
      this.router.navigateByUrl('/Home');
    }else{
      alert("Invalid credentials!")
    }
  }
  // register a new user
  register(){
    if(this.authService.registerUser(this.username,this.password)){
      alert("User successfully registered");
    }else{
      alert("Error!");
    }
  }

  // Show login or register form
  displayLogin: boolean = true;
  displayRegistration: boolean = false;

  displayLoginForm() {
    this.displayLogin = true;
    this.displayRegistration = false;
  }
  displayRegistrationForm() {
    this.displayLogin = false;
    this.displayRegistration = true;
  }
}
