import { Injectable } from '@angular/core';
import { User } from 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userRecord: User[] = [
    { username: 'admin', password: 'admin' }
  ]

  isLoggedIn = false;

  constructor() { }

  loginUser(username: string, password: string) {
    let data = this.userRecord.find(user => user.username == username)
    if ((data != null || data != undefined) && data.password == password) {
      return true;
    }
    return false;
  }
  registerUser(uname: string, pwd: string) :boolean{
    let data = this.userRecord.find(user => user.username == uname)
    if (data != null || data != undefined) {
      //data already exists so login instead
      this.loginUser(uname,pwd);
    }else{
      //data does not exist, hence add to database
      let newUser ={
        username:uname,
        password:pwd
      }
      this.userRecord.push(newUser);
      return true;
    }
    return false;
  }

  isAuthenticated(){
    console.log("logged in status : ")
    console.log(this.isLoggedIn)
    return this.isLoggedIn;
  }
}
