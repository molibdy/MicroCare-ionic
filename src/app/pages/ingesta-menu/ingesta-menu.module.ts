import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngestaMenuPageRoutingModule } from './ingesta-menu-routing.module';

import { IngestaMenuPage } from './ingesta-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngestaMenuPageRoutingModule
  ],
  declarations: [IngestaMenuPage]
})
export class IngestaMenuPageModule {}
