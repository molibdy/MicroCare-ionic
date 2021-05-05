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
  },  {
    path: 'buscador-recetas',
    loadChildren: () => import('./pages/buscador-recetas/buscador-recetas.module').then( m => m.BuscadorRecetasPageModule)
  },
  {
    path: 'preferencias',
    loadChildren: () => import('./pages/preferencias/preferencias.module').then( m => m.PreferenciasPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
