import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.scss'],
})
export class AddNewCarComponent implements OnInit {
@ViewChild('f',{static:true}) form: NgForm;


  constructor(private modalCtr: ModalController) { }

  ngOnInit() {}

   onCancel(){
     this.modalCtr.dismiss(null, 'cancel');
   }

   onAddCar(){
      if(!this.form.valid){
        return;
      }

      this.modalCtr.dismiss({
        carData:{
          car_mark: this.form.value['car_mark'],
          car_model: this.form.value['car_model'],
          car_made: this.form.value['car_made'],
          car_crossed: this.form.value['car_crossed'],
          car_fuel: this.form.value['car_fuel'],
          car_cubic_capacity: this.form.value['car_cubic_capacity'],
          car_engine_power: this.form.value['car_engine_power'],
          car_transmission: this.form.value['car_transmission'],
          car_emission_class: this.form.value['car_emission_class'],
          car_climate: this.form.value['car_climate'],
          car_doors: this.form.value['car_doors'],
          car_body: this.form.value['car_body'],
          car_seats: this.form.value['car_seats'],
          car_color: this.form.value['car_color'],
          car_drive: this.form.value['car_drive'],
          car_price: this.form.value['car_price'],
          car_type: this.form.value['car_type'],
          car_image: this.form.value['car_image'],
          car_accessories: this.form.value['car_accessories']
        }
      }, 'confirm');
   }

}
