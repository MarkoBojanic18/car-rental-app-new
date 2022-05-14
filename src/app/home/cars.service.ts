import { Injectable } from '@angular/core';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars: Car[] = [{id:'q1',marka_auta:'BMW', car_model: 'X5', car_made:'2020',car_crossed:'185.324',car_fuel:'disel',car_cubic_capacity:'1390', car_engine_power:'75 KS (55 kW)',car_transmission:'Manuelni - 5 brzina', car_emission_class:'Euro 4',car_climate:'ima klimu',car_door:'5',car_body:'jeep',car_seats:'5',car_color:'black',car_drive:'front',car_accessories:'sefefesfesfse',car_likes: 0,car_dislikes:0,car_reserved:true,car_owner_id:'Marko',car_price:'50',car_type:'sport',slika_url:'../../assets/bmwX5-2020.png'},
  {id:'q2',marka_auta:'BMW', car_model: 'X5', car_made:'2020',car_crossed:'185.324',car_fuel:'disel',car_cubic_capacity:'1390', car_engine_power:'75 KS (55 kW)',car_transmission:'Manuelni - 5 brzina', car_emission_class:'Euro 4',car_climate:'ima klimu',car_door:'5',car_body:'jeep',car_seats:'5',car_color:'black',car_drive:'front',car_accessories:'sefefesfesfse',car_likes:0,car_dislikes:0,car_reserved:false,car_owner_id:'Marko',car_price:'50',car_type:'sport',slika_url:'../../assets/2016-audi-rs-7-png-13.png'}];

  constructor() { }

  getCar(id: string){
    return this.cars.find((c:Car)=> c.id === id);
  }
}


