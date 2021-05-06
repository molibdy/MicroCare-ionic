import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  //////q
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
    path: 'menu',
    loadChildren: () => import('./pages/burger-menu/burger-menu.module').then( m => m.BurgerMenuPageModule)
  },
  {
    path: 'buscar-receta',
    loadChildren: () => import('./pages/buscador-recetas/buscador-recetas.module').then( m => m.BuscadorRecetasPageModule)
  },
  {
    path: 'preferencias',
    loadChildren: () => import('./pages/preferencias/preferencias.module').then( m => m.PreferenciasPageModule)
  },

  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dia',
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
