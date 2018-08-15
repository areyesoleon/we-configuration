import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { RoutesComponent } from './routes/routes.component';
import { PAGES_ROUTES } from './configuration.routes';
import { MaterialModule } from './material';
import { CompanyComponent } from './company/company.component';
import { UserComponent } from './user/user.component';
import { ServicesModule } from '../services/services.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    PAGES_ROUTES,
    MaterialModule,
    ServicesModule,
    FormsModule
  ],
  providers:[],
  declarations: [StartComponent, RoutesComponent, CompanyComponent, UserComponent],
  exports: [RoutesComponent]
})
export class ConfigurationModule { }
