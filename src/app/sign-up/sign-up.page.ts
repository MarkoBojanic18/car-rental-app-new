import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
registerForm: FormGroup;
  
  signUp = {
    firstname:"",
    surname: "",
    phoneNumber:"",
    email : "",
    password: "",
    admin: false
  };

  type: boolean = true;

  constructor(private authService: AuthService, private loadingController: LoadingController, private router: Router) { }

  ngOnInit() {
     
  }

  changeType(){
    this.type = !this.type;
  }

  onSignUp(form:NgForm){
    this.loadingController
    .create({message: "Loading..."})
    .then((loadingEl) => {loadingEl.present();


      this.registerForm = new FormGroup({
      name: new FormControl(this.signUp.firstname),
      surname: new FormControl(this.signUp.surname),
      phoneNumber: new FormControl(this.signUp.phoneNumber),
      email: new FormControl(this.signUp.email),
      password: new FormControl(this.signUp.password),
      admin: new FormControl(this.signUp.admin)
    });
    console.log(this.registerForm.value.name);
    
    console.log(form);
    this.authService.register(this.registerForm.value).subscribe(resData=>{
      console.log('Registracija je uspela');
      console.log(resData);
      loadingEl.dismiss();
      this.router.navigateByUrl('/login');
    })
    });
     
  }

}
