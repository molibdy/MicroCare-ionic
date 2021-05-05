import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerMenuPage } from './burger-menu.page';

const routes: Routes = [
  {
    path: '',
    component: BurgerMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerMenuPageRoutingModule {}
