import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgerMenuPageRoutingModule } from './burger-menu-routing.module';

import { BurgerMenuPage } from './burger-menu.page';
import { BottonCruzComponent } from 'src/app/componentes/botton-cruz/botton-cruz.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgerMenuPageRoutingModule
  ],
  declarations: [BurgerMenuPage, BottonCruzComponent]
})
export class BurgerMenuPageModule {}
