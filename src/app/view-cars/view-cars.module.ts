import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCarsPageRoutingModule } from './view-cars-routing.module';

import { ViewCarsPage } from './view-cars.page';
import { HomeElementComponent } from '../home/home-element/home-element.component';
import { CarElementComponent } from './car-element/car-element.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCarsPageRoutingModule
  ],
  declarations: [ViewCarsPage, CarElementComponent]
})
export class ViewCarsPageModule {}
