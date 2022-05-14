import { Component, OnInit, ViewChildren } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Car } from './car.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  cars: Car[] = [{id:'q1',marka_auta:'Toyota',slika_url:'../../assets/toyotacrna.png'},{id:'q2',marka_auta:'audi',slika_url:'../../assets/2016-audi-rs-7-png-13.png'}];
  
  

  

  constructor() { }

  ngOnInit() {
  }

}
