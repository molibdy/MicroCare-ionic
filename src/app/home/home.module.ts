import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { BottonBurgerComponent } from '../componentes/botton-burger/botton-burger.component';
import { VitaminChartComponent } from '../componentes/vitamin-chart/vitamin-chart.component';
import { MineralChartComponent } from '../componentes/mineral-chart/mineral-chart.component';
import { OmegasChartComponent } from '../componentes/omegas-chart/omegas-chart.component';
import { AminoacidChartComponent } from '../componentes/aminoacid-chart/aminoacid-chart.component';
import { UsuarioComponent } from '../componentes/usuario/usuario.component';
import { GraficaOthersComponent } from '../componentes/grafica-others/grafica-others.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgApexchartsModule
  ],
  declarations: [HomePage,
BottonBurgerComponent,
VitaminChartComponent,
MineralChartComponent,
OmegasChartComponent,
AminoacidChartComponent,
UsuarioComponent,
GraficaOthersComponent]
})
export class HomePageModule {}
