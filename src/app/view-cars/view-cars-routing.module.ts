import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCarsPage } from './view-cars.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCarsPageRoutingModule {}
