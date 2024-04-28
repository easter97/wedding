import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor() { }

  loggedInUser(){
  }

  allUsers(){

  }

  loggedIn(){
    let hasToken = false;
    if (localStorage.getItem('token') == environment.secretToken){
      hasToken = true;
    }
    return hasToken;
  }

  getToken(){
    return localStorage.getItem('token');
  }

}