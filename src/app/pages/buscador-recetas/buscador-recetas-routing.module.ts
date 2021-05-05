import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscadorRecetasPage } from './buscador-recetas.page';

const routes: Routes = [
  {
    path: '',
    component: BuscadorRecetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscadorRecetasPageRoutingModule {}
