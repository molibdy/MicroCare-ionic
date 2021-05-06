import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaRecetaPageRoutingModule } from './vista-receta-routing.module';

import { VistaRecetaPage } from './vista-receta.page';
import { BottonCruzComponent } from 'src/app/componentes/botton-cruz/botton-cruz.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaRecetaPageRoutingModule
  ],
  declarations: [VistaRecetaPage, BottonCruzComponent]
})
export class VistaRecetaPageModule {}
