import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlugsComponent }      from './plugs.component';
import { AlarmsComponent }      from './alarms.component';

const appRoutes: Routes = [
  {
    path: 'plugs',
    component: PlugsComponent
  },
  {
    path: 'alarms',
    component: AlarmsComponent
  },
  {
    path: '',
    redirectTo: '/plugs',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
