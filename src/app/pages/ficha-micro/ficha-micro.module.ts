import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichaMicroPageRoutingModule } from './ficha-micro-routing.module';

import { FichaMicroPage } from './ficha-micro.page';
import { BottonCruzComponent } from 'src/app/componentes/botton-cruz/botton-cruz.component';
import { MicronutrientChartComponent } from 'src/app/componentes/micronutrient-chart/micronutrient-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichaMicroPageRoutingModule,
    NgApexchartsModule
  ],
  declarations: [FichaMicroPage, BottonCruzComponent, MicronutrientChartComponent]
})
export class FichaMicroPageModule {}
