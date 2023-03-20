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
    "./assets/boudhaStupa2.jpg"
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
    // this.authService.loginUser returns true if user credentials are correct
    if(this.authService.isLoggedIn==true){
      // since user is now logged in, they are redirected to the home page
      let loginForm = document.querySelector('.form-container') as HTMLElement;
      loginForm.classList.add('authenticated');
      setTimeout(()=>{
        this.router.navigateByUrl('/Home');
      },500)
    }else{
      // if there seems to be an error, an error message pops up
      alert("Invalid credentials!")
    }
  }
  // register a new user
  register(){
    if(this.authService.registerUser(this.username,this.password)){
      alert("User successfully registered");
    }else{
      // Cannot register user again and again
      alert("Error registering user!");
    }
  }

  // Show login or register form
  displayLogin: boolean = true;
  displayRegistration: boolean = false;

  // displays login form over registration form
  displayLoginForm() {
    this.displayLogin = true;
    this.displayRegistration = false;
  }

  // displays registration form over login form
  displayRegistrationForm() {
    this.displayLogin = false;
    this.displayRegistration = true;
  }
}
