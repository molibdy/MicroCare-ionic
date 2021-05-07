import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichaGrupoPageRoutingModule } from './ficha-grupo-routing.module';

import { FichaGrupoPage } from './ficha-grupo.page';
import { BottonCruzComponent } from 'src/app/componentes/botton-cruz/botton-cruz.component';
import { GroupChartComponent } from 'src/app/componentes/group-chart/group-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichaGrupoPageRoutingModule,
    NgApexchartsModule
  ],
  declarations: [FichaGrupoPage, BottonCruzComponent,GroupChartComponent]
})
export class FichaGrupoPageModule {}
