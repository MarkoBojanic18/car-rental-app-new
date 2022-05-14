import { Component, OnInit, ViewChildren } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Car } from './car.model';
import { CarsService } from './cars.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // cars: Car[] = [{id:'q1',marka_auta:'Toyota',slika_url:'../../assets/toyotacrna.png'},{id:'q2',marka_auta:'audi',slika_url:'../../assets/2016-audi-rs-7-png-13.png'}];
  
  cars:Car[];

  

  constructor(private carsService: CarsService,private authService: AuthService,private router:Router) { 
    this.cars = this.carsService.cars;
    
  }

  ngOnInit() {
  }

  logOut(){
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }

}
