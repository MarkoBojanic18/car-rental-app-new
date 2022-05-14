import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from './car.model';

interface CarData{
  marka_auta: string;
    car_model:string;
    car_made:string;
    car_crossed:string;
    car_fuel:string;
    car_cubic_capacity:string;
    car_engine_power:string;
    car_transmission:string;
    car_emission_class:string;
    car_climate:string;
    car_door:string;
    car_body:string;
    car_seats:string;
    car_color:string;
    car_drive:string;
    car_accessories:string;
    car_likes: number;
    car_dislikes:number;
    car_reserved:boolean;
    car_owner_id:string;
    car_price:string;
    car_type:string;
    slika_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars: Car[] = [{id:'q1',marka_auta:'BMW', car_model: 'X5', car_made:'2020',car_crossed:'185.324',car_fuel:'disel',car_cubic_capacity:'1390', car_engine_power:'75 KS (55 kW)',car_transmission:'Manuelni - 5 brzina', car_emission_class:'Euro 4',car_climate:'ima klimu',car_door:'5',car_body:'jeep',car_seats:'5',car_color:'black',car_drive:'front',car_accessories:'sefefesfesfse',car_likes: 0,car_dislikes:0,car_reserved:true,car_owner_id:'Marko',car_price:'50',car_type:'sport',slika_url:'../../assets/bmwX5-2020.png'},
  {id:'q2',marka_auta:'BMW', car_model: 'X5', car_made:'2020',car_crossed:'185.324',car_fuel:'disel',car_cubic_capacity:'1390', car_engine_power:'75 KS (55 kW)',car_transmission:'Manuelni - 5 brzina', car_emission_class:'Euro 4',car_climate:'ima klimu',car_door:'5',car_body:'jeep',car_seats:'5',car_color:'black',car_drive:'front',car_accessories:'sefefesfesfse',car_likes:0,car_dislikes:0,car_reserved:false,car_owner_id:'Marko',car_price:'50',car_type:'sport',slika_url:'../../assets/2016-audi-rs-7-png-13.png'}];

  constructor(private http:HttpClient) { }

  addCar(marka_auta: string,
    car_model:string,
    car_made:string,
    car_crossed:string,
    car_fuel:string,
    car_cubic_capacty:string,
    car_engine_power:string,
    car_transmission:string,
    car_emission_class:string,
    car_climate:string,
    car_door:string,
    car_body:string,
    car_seats:string,
    car_color:string,
    car_drive:string,
    car_accessories:string,
    car_dislikes:number,
    car_reserved:boolean,
    car_owner_id:string,
    car_price:string,
    car_type:string,
    slika_url: string){
      return this.http.post<{name: string}>(`https://ionic-car-rental-default-rtdb.europe-west1.firebasedatabase.app/cars.json`,{
        marka_auta,
    car_model,
    car_made,
    car_crossed,
    car_fuel,
    car_cubic_capacty,
    car_engine_power,
    car_transmission,
    car_emission_class,
    car_climate,
    car_door,
    car_body,
    car_seats,
    car_color,
    car_drive,
    car_accessories,
    car_dislikes,
    car_reserved,
    car_owner_id,
    car_price,
    car_type,
    slika_url
      });
    }


    getCars(){
      return this.http.get<{[key: string]: CarData}>(`https://ionic-car-rental-default-rtdb.europe-west1.firebasedatabase.app/cars.json`);
    }

  getCar(id: string){
    return this.cars.find((c:Car)=> c.id === id);
  }
}


