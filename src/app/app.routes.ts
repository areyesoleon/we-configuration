import { RouterModule, Routes } from '@angular/router';
import { RoutesComponent } from './configuration/routes/routes.component';
import { PAGES_ROUTES } from './configuration/configuration.routes';

const appRoutes: Routes = [
  {
    path: '',
    component: RoutesComponent
  }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {
  useHash: true
});
