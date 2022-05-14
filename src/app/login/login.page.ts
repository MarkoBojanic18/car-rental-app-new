import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   login = {
    email : "",
    password: "",
  };

  type: boolean = true;
  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit() {
  }

  changeType(){
    this.type = !this.type;
  }

  onLogIn(form:NgForm){
    console.log(form);
    this.authService.logIn();
    this.router.navigateByUrl('/home');
  }

  gmailLogin(){

  }

  twitterLogin(){

  }

  facebookLogin(){
    
  }

}
