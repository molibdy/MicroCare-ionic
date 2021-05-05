import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngestaMenuPageRoutingModule } from './ingesta-menu-routing.module';

import { IngestaMenuPage } from './ingesta-menu.page';
import { FavoritosComponent } from 'src/app/componentes/favoritos/favoritos.component';
import { IntroducirManualComponent } from 'src/app/componentes/introducir-manual/introducir-manual.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngestaMenuPageRoutingModule
  ],
  declarations: [IngestaMenuPage, FavoritosComponent, IntroducirManualComponent]
})
export class IngestaMenuPageModule {}
