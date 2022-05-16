import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewAdminPage } from './add-new-admin.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewAdminPageRoutingModule {}
