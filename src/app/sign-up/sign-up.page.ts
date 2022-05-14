import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  
  signUp = {
    fullName:"",
    phoneNumber:"",
    email : "",
    password: "",
  };

  type: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  changeType(){
    this.type = !this.type;
  }

  onSignUp(form:NgForm){
    console.log(form);
  }

}
