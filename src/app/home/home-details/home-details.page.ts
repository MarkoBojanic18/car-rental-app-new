import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { parseISO } from 'date-fns';
import { Car } from '../car.model';
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
  car: Car = {id:'q3', marka_auta:'Novi',slika_url: "../../assets/2016-audi-rs-7-png-13.png"};

  addresses: string[] = [];
  selectedAddress = null;

  constructor(private mapboxService: MapboxServiceService) { 
    this.setToday();
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


  ngOnInit() {
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
