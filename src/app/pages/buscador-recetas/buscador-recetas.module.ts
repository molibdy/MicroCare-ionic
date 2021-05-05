import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscadorRecetasPageRoutingModule } from './buscador-recetas-routing.module';

import { BuscadorRecetasPage } from './buscador-recetas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscadorRecetasPageRoutingModule
  ],
  declarations: [BuscadorRecetasPage]
})
export class BuscadorRecetasPageModule {}
