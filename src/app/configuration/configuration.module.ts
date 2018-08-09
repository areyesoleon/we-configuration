import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { RoutesComponent } from './routes/routes.component';
import { PAGES_ROUTES } from './configuration.routes';
import { MaterialModule } from './material';
import { CompanyComponent } from './company/company.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    PAGES_ROUTES,
    MaterialModule
  ],
  declarations: [StartComponent, RoutesComponent, CompanyComponent, UserComponent],
  exports: [RoutesComponent]
})
export class ConfigurationModule { }
