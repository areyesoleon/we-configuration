import { RouterModule, Routes } from "@angular/router";
import { StartComponent } from "./start/start.component";
import { CompanyComponent } from "./company/company.component";
import { UserComponent } from "./user/user.component";
import { CompanyListComponent } from "./company-list/company-list.component";
import { UserListComponent } from "./user-list/user-list.component";

const pagesRoutes: Routes = [
  {
    path: 'config',
    children:[
      { path: '', component: StartComponent },
      { path: 'company', component: CompanyComponent },
      { path: 'company/:id', component: CompanyComponent },
      { path: 'company-list', component: CompanyListComponent },
      { path: 'user', component: UserComponent },
      { path: 'user/:id', component: UserComponent },
      { path: 'user-list', component: UserListComponent }
    ]
  }
]

export const PAGES_ROUTES: any = RouterModule.forChild(pagesRoutes);
