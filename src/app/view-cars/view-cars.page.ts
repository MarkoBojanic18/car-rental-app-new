import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Car } from '../home/car.model';
import { CarsService } from '../home/cars.service';

@Component({
  selector: 'app-view-cars',
  templateUrl: './view-cars.page.html',
  styleUrls: ['./view-cars.page.scss'],
})
export class ViewCarsPage implements OnInit {

    cars:Car[];

  

  constructor(private carsService: CarsService,private authService: AuthService,private router:Router) { 
    this.cars = this.carsService.cars;
    
  }

  ngOnInit() {
    this.carsService.getCars().subscribe((cars) =>{
        this.cars = cars;
    });
  }

  ionViewWillEnter(){
    this.carsService.getCars().subscribe((cars) =>{
        this.cars = cars;
    });
  }

}
