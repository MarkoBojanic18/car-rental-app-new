import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface AuthResponseData{
  kind: string;
  idToken: string;
  name:string;
  surname: string;
  phoneNumber: string;
  email:string;
  admin:boolean;
  refreshToken:string;
  localId: string;
  expiresIn: string;
  registered?:boolean;
}

interface UserData{
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  password: string;
  admin: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserAuthenticated = false;

  constructor(private http: HttpClient) { }

  get isUser_Authenticated():boolean{
    return this.isUserAuthenticated;
  }

  register(UserData){
    this.isUserAuthenticated = true;
    return this.http.post<AuthenticatorResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
    {email: UserData.email,password: UserData.password, name: UserData.name, surname: UserData.surname, phoneNumber: UserData.phoneNumber, admin:UserData.admin, returnSecureToken: true});
  }

  makeUser(firstname:string,surname:string,email:string,password:string,phoneNumber:string,admin:boolean){
    
  }


  logIn(){
    this.isUserAuthenticated = true;
  }

  logOut(){
    this.isUserAuthenticated = false;
  }
}
