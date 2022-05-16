import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { format } from 'date-fns';
import { parseISO } from 'date-fns';
import { Car } from '../car.model';
import { CarsService } from '../cars.service';
import { MapboxServiceService, Feature } from '../mapbox-service.service';




@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.page.html',
  styleUrls: ['./home-details.page.scss'],
})
export class HomeDetailsPage implements OnInit {
  modes = ['date','time'];
  selectedMode = "date";
  showPicker = false;
  zipped = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString = '';
   currentNumber = 1;
   click = false;
  car: Car = {id:'q1',marka_auta:'BMW', car_model: 'X5', car_made:'2020',car_crossed:'185.324',car_fuel:'disel',car_cubic_capacity:'1390', car_engine_power:'75 KS (55 kW)',car_transmission:'Manuelni - 5 brzina', car_emission_class:'Euro 4',car_climate:'ima klimu',car_door:'5',car_body:'jeep',car_seats:'5',car_color:'black',car_drive:'front',car_accessories:'sefefesfesfse',car_likes:0,car_dislikes:0,car_reserved:false,car_owner_id:'Marko',car_price:'50',car_type:'sport',slika_url:'../../assets/2016-audi-rs-7-png-13.png'};

  addresses: string[] = [];
  selectedAddress = null;

  constructor(private mapboxService: MapboxServiceService, private route:ActivatedRoute,private carsService: CarsService) { 
    this.setToday();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      console.log(paramMap.get('carId'));
      this.car = this.carsService.getCar(paramMap.get('carId'));
      
    });
  }


  //incement likes i dislikes
  incrementLikes(){
    if(this.click != true){
      this.car.car_likes += 1;
      this.click = true;
    }
  }

  incrementDisLikes(){
    if(this.click != true){
      this.car.car_dislikes += 1;
      this.click = true;
    }
  }

  //ovo je za lokaciju autoComplete opcija
  search(event:any){
      const searchTerm = event.target.value.toLowerCase();
      if(searchTerm && searchTerm.length > 0){
        this.mapboxService.search_word(searchTerm).subscribe((features: Feature[])=>{
          this.addresses = features.map(feat => feat.place_name);
        });
      }else{
        this.addresses = [];
      }
  }

  onSelect(address:string){
    this.selectedAddress = address;
    this.addresses = [];
  }

  //provera da li je selektovana adresa
  checkAddress(){
    if(this.selectedAddress == null){
      return false;
    }

    return true;
  }


  


  // ovo je dateTime picker 
  setToday(){
    this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd')+ 'T09:00:00.000Z'),"dd-MM-yyyy, HH:mm");
  }

  dateChanged(value){
    this.dateValue = value;
    this.formattedString = format(parseISO(value), "dd-MM-yyyy, HH:mm");
    this.showPicker = false;
  }

  //broj dana counter
  incrementDays() {

    if(this.currentNumber == 20){
      this.currentNumber = 20;
      alert("Number of days can NOT be higher than 20");
    }
    else{
      this.currentNumber += 1;
    }
  }
  
   decrementDays() {

    if(this.currentNumber == 1){
      this.currentNumber = 1;
      alert("Number of days can NOT be less than 1");
    }
    else{
      this.currentNumber -= 1;
    }
  }

 




   

 

}
