import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDashboardPageRoutingModule } from './admin-dashboard-routing.module';

import { AdminDashboardPage } from './admin-dashboard.page';
import {AddNewCarComponent} from "./add-new-car/add-new-car.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDashboardPageRoutingModule
  ],
  declarations: [AdminDashboardPage, AddNewCarComponent],
  entryComponents: [AddNewCarComponent]
})
export class AdminDashboardPageModule {}
