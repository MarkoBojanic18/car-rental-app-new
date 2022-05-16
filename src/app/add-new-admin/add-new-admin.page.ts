import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-new-admin',
  templateUrl: './add-new-admin.page.html',
  styleUrls: ['./add-new-admin.page.scss'],
})
export class AddNewAdminPage implements OnInit {
registerForm: FormGroup;
  
  signUp = {
    firstname:"",
    surname: "",
    phoneNumber:"",
    email : "",
    password: "",
    admin: true
  };

  type: boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
   
  }

  changeType(){
    this.type = !this.type;
  }

  onSignUp(form:NgForm){
    

     this.registerForm = new FormGroup({
      name: new FormControl(this.signUp.firstname),
      surname: new FormControl(this.signUp.surname),
      phoneNumber: new FormControl(this.signUp.phoneNumber),
      email: new FormControl(this.signUp.email),
      password: new FormControl(this.signUp.password),
      admin: new FormControl(this.signUp.admin)
    });

    
    console.log(form);
    this.authService.register(this.registerForm.value).subscribe(resData=>{
      console.log('Registracija je uspela');
      console.log(resData);
    })
  }

}
