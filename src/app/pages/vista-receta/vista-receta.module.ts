import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaRecetaPageRoutingModule } from './vista-receta-routing.module';

import { VistaRecetaPage } from './vista-receta.page';
import { BottonCruzComponent } from 'src/app/componentes/botton-cruz/botton-cruz.component';
import { GramsPipe } from 'src/app/pipes/grams.pipe';

import { NgApexchartsModule } from 'ng-apexcharts';
import { MicroScoreComponent } from 'src/app/componentes/micro-score/micro-score.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaRecetaPageRoutingModule,
    NgApexchartsModule
  ],
  declarations: [VistaRecetaPage, BottonCruzComponent, GramsPipe, MicroScoreComponent]
})
export class VistaRecetaPageModule {}
