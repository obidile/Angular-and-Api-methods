import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OwnListComponent } from './own-list/own-list.component';
import { ProfileDatailComponent } from './profile-datail/profile-datail.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { SchoolsApiComponent } from './schools-api/schools-api.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { component: UserListComponent, path: '' },
  { component: UserDetailComponent, path: 'user-detail/:id' },
  { path: 'user-detail', component: UserDetailComponent, data: { title: 'user-detail' } },
  { component: ProfileDatailComponent, path: 'profile/:id' },
  { path: 'profile', component: ProfileListComponent, data: { title: 'profile' } },
  { path: 'own-list', component: OwnListComponent },
  { path: 'school', component: SchoolsApiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
