import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/demo/home_page/home.page.component').then(m => m.HomePageComponent)
  },
  {
    path: 'demo',
    loadComponent: () =>
      import('./features/demo/loading-screen/loading.screen.component').then(m => m.DemoLoadingScreenComponent)
  }
];
