import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
   resetPassword = {
    email : "",
    newPassword: "",
  };

  type: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  changeType(){
    this.type = !this.type;
  }

  resetForm(form:NgForm){
    console.log(form);
  }

}
