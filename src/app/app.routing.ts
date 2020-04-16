import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { OrganizationComponent } from './organization/organization.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'user', component: UserComponent },
  { path: 'organization', component: OrganizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
