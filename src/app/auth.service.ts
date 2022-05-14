import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserAuthenticated = false;

  constructor() { }

  get isUser_Authenticated():boolean{
    return this.isUserAuthenticated;
  }


  logIn(){
    this.isUserAuthenticated = true;
  }

  logOut(){
    this.isUserAuthenticated = false;
  }
}
