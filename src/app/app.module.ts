import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GramsPipe } from './pipes/grams.pipe';
import { GramosPipe } from './pipes/gramos.pipe';
import { BuscadorRecetasPipe } from './pipes/buscador-recetas.pipe';



@NgModule({
  declarations: [AppComponent, GramsPipe, GramosPipe, BuscadorRecetasPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
