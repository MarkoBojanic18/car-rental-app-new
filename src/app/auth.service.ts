import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './user.model';

interface AuthResponseData{
  kind: string;
  idToken: string;
  firstname:string;
  surname: string;
  phoneNumber: string;
  password: string;
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
  private _user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) { }

  get isUser_Authenticated(){
    return this._user.asObservable().pipe(
      map((user)=>{
        if(user){
          return !!user.token;
        }else{
          return false;
        }
      })
    );
  }


  register(UserData){
    this.isUserAuthenticated = true;
    return this.http.post<AuthenticatorResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
    {email: UserData.email,password: UserData.password, name: UserData.name, surname: UserData.surname, phoneNumber: UserData.phoneNumber, admin:UserData.admin, returnSecureToken: true});
  }


  logIn(UserData){
    this.isUserAuthenticated = true;
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
    {email: UserData.email,password: UserData.password,  returnSecureToken: true})
    .pipe(tap((userData)=>{
        const expirationTime = new Date(new Date().getTime() + +userData.expiresIn * 1000);
        const user = new User(userData.localId, userData.email,userData.password,userData.firstname,userData.surname,userData.phoneNumber,userData.admin,userData.idToken,expirationTime);
        this._user.next(user);
    }));
  }

  logOut(){
    this._user.next(null);
  }
}
