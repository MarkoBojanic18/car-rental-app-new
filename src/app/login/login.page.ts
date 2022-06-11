import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  
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
    this.isLoading = true;

    this.loginForm = new FormGroup({
      email: new FormControl(this.login.email),
      password: new FormControl(this.login.password)
    });
    console.log(this.loginForm.value.name);
    
    console.log(form);
    this.authService.logIn(this.loginForm.value).subscribe(resData=>{
      console.log('Registracija je uspela');
      console.log(resData);
      this.isLoading = false;
      if(this.login.email === 'markobojanic@gmail.com'){
        this.router.navigateByUrl('/admin-dashboard');
      }else{
        this.router.navigateByUrl('/home');
      }
    });
  }

  gmailLogin(){

  }

  twitterLogin(){

  }

  facebookLogin(){
    
  }

}
