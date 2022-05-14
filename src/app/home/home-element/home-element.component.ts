import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../car.model';


@Component({
  selector: 'app-home-element',
  templateUrl: './home-element.component.html',
  styleUrls: ['./home-element.component.scss'],
})
export class HomeElementComponent implements OnInit {
  @Input() car: Car = {id:'q3', marka_auta:'Novi',slika_url: "../../assets/2016-audi-rs-7-png-13.png"};
  constructor() { }

  ngOnInit() {}

}
