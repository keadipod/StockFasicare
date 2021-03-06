import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'editprofile/:id', loadChildren: './editprofile/editprofile.module#EditprofilePageModule' },
  { path: 'changpassword', loadChildren: './changpassword/changpassword.module#ChangpasswordPageModule' },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
