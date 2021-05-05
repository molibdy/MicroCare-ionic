import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaRecetaPageRoutingModule } from './vista-receta-routing.module';

import { VistaRecetaPage } from './vista-receta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaRecetaPageRoutingModule
  ],
  declarations: [VistaRecetaPage]
})
export class VistaRecetaPageModule {}
