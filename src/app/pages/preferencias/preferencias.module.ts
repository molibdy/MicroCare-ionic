import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreferenciasPageRoutingModule } from './preferencias-routing.module';

import { PreferenciasPage } from './preferencias.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PreferenciasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreferenciasPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PreferenciasPage]
})
export class PreferenciasPageModule {}
