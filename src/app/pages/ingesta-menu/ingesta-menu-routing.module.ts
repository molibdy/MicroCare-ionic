import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngestaMenuPage } from './ingesta-menu.page';

const routes: Routes = [
  {
    path: '',
    component: IngestaMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngestaMenuPageRoutingModule {}
