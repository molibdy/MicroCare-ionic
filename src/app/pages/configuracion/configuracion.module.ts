import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionPageRoutingModule } from './configuracion-routing.module';

import { ConfiguracionPage } from './configuracion.page';
import { BottonCruzComponent } from 'src/app/componentes/botton-cruz/botton-cruz.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionPageRoutingModule
  ],
  declarations: [ConfiguracionPage,  BottonCruzComponent]
})
export class ConfiguracionPageModule {}
