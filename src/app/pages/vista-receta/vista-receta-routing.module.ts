import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaRecetaPage } from './vista-receta.page';

const routes: Routes = [
  {
    path: '',
    component: VistaRecetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaRecetaPageRoutingModule {}
