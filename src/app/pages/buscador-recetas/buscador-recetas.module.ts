import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscadorRecetasPageRoutingModule } from './buscador-recetas-routing.module';

import { BuscadorRecetasPage } from './buscador-recetas.page';
import { RecetasComponent } from 'src/app/componentes/buscador/recetas/recetas.component';
import { BottonBurgerComponent } from 'src/app/componentes/botton-burger/botton-burger.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscadorRecetasPageRoutingModule,
   
  ],
  declarations: [BuscadorRecetasPage, RecetasComponent, BottonBurgerComponent]
})
export class BuscadorRecetasPageModule {}
