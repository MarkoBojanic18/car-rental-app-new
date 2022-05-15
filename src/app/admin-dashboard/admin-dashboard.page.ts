import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import { ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { AuthService } from '../auth.service';
import { AddNewCarComponent } from './add-new-car/add-new-car.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {
  tasks;

  constructor(private authService: AuthService,private router:Router,private modalCtr: ModalController) { }

  ngOnInit() {
  }

  goToSubject(){

  } 

  logOut(){
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }

  openModal(){
    this.modalCtr.create({
      component:AddNewCarComponent
    }).then((modal:HTMLIonModalElement) =>{
      modal.present();
      return modal.onDidDismiss();
    }).then((resultData:OverlayEventDetail<any>)=>{
      if(resultData.role === 'confirm'){
        console.log(resultData);
      }
    });
  }

 

}
