import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ingesta-menu',
    loadChildren: () => import('./pages/ingesta-menu/ingesta-menu.module').then( m => m.IngestaMenuPageModule)
  },
  {
    path: 'burger-menu',
    loadChildren: () => import('./pages/burger-menu/burger-menu.module').then( m => m.BurgerMenuPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./pages/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'vista-receta',
    loadChildren: () => import('./pages/vista-receta/vista-receta.module').then( m => m.VistaRecetaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
