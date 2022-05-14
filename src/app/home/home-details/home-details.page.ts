import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { parseISO } from 'date-fns';
import { Car } from '../car.model';




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
  car: Car = {id:'q3', marka_auta:'Novi',slika_url: "../../assets/2016-audi-rs-7-png-13.png"};

  constructor() { 
    this.setToday();
  }

  ngOnInit() {
  }

  setToday(){
    this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd')+ 'T09:00:00.000Z'),"dd-MM-yyyy, HH:mm");
  }

  dateChanged(value){
    this.dateValue = value;
    this.formattedString = format(parseISO(value), "dd-MM-yyyy, HH:mm");
    this.showPicker = false;
  }

 




   

 

}
