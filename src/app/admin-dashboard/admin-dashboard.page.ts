import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import { ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { AuthService } from '../auth.service';
import { CarsService } from '../home/cars.service';
import { AddNewCarComponent } from './add-new-car/add-new-car.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {
  tasks;

  constructor(private carsService: CarsService,private authService: AuthService,private router:Router,private modalCtr: ModalController) { }

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

        this.carsService.addCar(
    resultData.data.carData.car_mark,
    resultData.data.carData.car_model,
    resultData.data.carData.car_made,
    resultData.data.carData.car_crossed,
    resultData.data.carData.car_fuel,
    resultData.data.carData.car_cubic_capacty,
    resultData.data.carData.car_engine_power,
    resultData.data.carData.car_transmission,
    resultData.data.carData.car_emission_class,
    resultData.data.carData.car_climate,
    resultData.data.carData.car_doors,
    resultData.data.carData.car_body,
    resultData.data.carData.car_seats,
    resultData.data.carData.car_color,
    resultData.data.carData.car_drive,
    resultData.data.carData.car_accessories,
    0,
    0,
    false,
    null,
    resultData.data.carData.car_price,
    resultData.data.carData.car_type,
    resultData.data.carData.car_image).subscribe((res:{name:string})=>{
      console.log(res);
    });
      }
    });
  }

  openViewCarsPage(){
this.router.navigateByUrl('view-cars');
  }
  

 

}
