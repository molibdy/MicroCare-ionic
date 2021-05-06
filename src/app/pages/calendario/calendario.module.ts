import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioPageRoutingModule } from './calendario-routing.module';

import { CalendarioPage } from './calendario.page';
import { BottonBurgerComponent } from 'src/app/componentes/botton-burger/botton-burger.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioPageRoutingModule
  ],
  declarations: [CalendarioPage, BottonBurgerComponent]
})
export class CalendarioPageModule {}
