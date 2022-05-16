import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewAdminPageRoutingModule } from './add-new-admin-routing.module';

import { AddNewAdminPage } from './add-new-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewAdminPageRoutingModule
  ],
  declarations: [AddNewAdminPage]
})
export class AddNewAdminPageModule {}
