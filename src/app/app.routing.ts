import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlugsComponent }      from './plugs.component';

const appRoutes: Routes = [
  {
    path: 'plugs',
    component: PlugsComponent
  },
  {
    path: '',
    redirectTo: '/plugs',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
