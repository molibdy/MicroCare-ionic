import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngestaMenuPageRoutingModule } from './ingesta-menu-routing.module';

import { IngestaMenuPage } from './ingesta-menu.page';
import { FavoritosComponent } from 'src/app/componentes/favoritos/favoritos.component';
import { IntroducirManualComponent } from 'src/app/componentes/introducir-manual/introducir-manual.component';
import { GramsPipe } from 'src/app/pipes/grams.pipe';
import { GramosPipe } from 'src/app/pipes/gramos.pipe';
import { BottonBurgerComponent } from 'src/app/componentes/botton-burger/botton-burger.component';
import { MicroScoreComponent } from 'src/app/componentes/micro-score/micro-score.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngestaMenuPageRoutingModule
    
    
  ],
  declarations: [IngestaMenuPage, FavoritosComponent, IntroducirManualComponent,BottonBurgerComponent,  GramsPipe, GramosPipe, MicroScoreComponent]
})
export class IngestaMenuPageModule {}
