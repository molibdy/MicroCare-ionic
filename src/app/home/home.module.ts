import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { IntroducirManualComponent } from '../componentes/introducir-manual/introducir-manual.component';
import { FavoritosComponent } from '../componentes/favoritos/favoritos.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
  NavBarComponent, FavoritosComponent,IntroducirManualComponent]
})
export class HomePageModule {}
