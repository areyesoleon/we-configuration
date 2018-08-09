import { RouterModule, Routes } from "@angular/router";
import { StartComponent } from "./start/start.component";
import { CompanyComponent } from "./company/company.component";
import { UserComponent } from "./user/user.component";

const pagesRoutes: Routes = [
  {
    path: 'config',
    children:[
      { path: '', component: StartComponent },
      { path: 'company', component: CompanyComponent },
      { path: 'user', component: UserComponent }
    ]
  }
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
