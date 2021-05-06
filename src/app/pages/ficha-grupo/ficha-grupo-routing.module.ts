import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichaGrupoPage } from './ficha-grupo.page';

const routes: Routes = [
  {
    path: '',
    component: FichaGrupoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichaGrupoPageRoutingModule {}
