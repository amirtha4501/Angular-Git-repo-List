import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { OrganizationComponent } from './organization/organization.component';
// import { RepositoryComponent } from './repository/repository.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'user', component: UserComponent },
  // { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'organization', component: OrganizationComponent}
  // { path: 'repo', component: RepositoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
