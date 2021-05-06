import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichaMicroPage } from './ficha-micro.page';

const routes: Routes = [
  {
    path: '',
    component: FichaMicroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichaMicroPageRoutingModule {}
