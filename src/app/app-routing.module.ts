import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OwnListComponent } from './own-list/own-list.component';
import { SchoolsApiComponent } from './schools-api/schools-api.component';
import { SchoolApiFormComponent } from './school-api-form/school-api-form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { component: UserListComponent, path: '' },
  { component: UserDetailComponent, path: 'user-detail/:id' },
  { path: 'user-detail', component: UserDetailComponent, data: { title: 'user-detail' } },
  { path: 'own-list', component: OwnListComponent },
  { path: 'school', component: SchoolsApiComponent },
  { path:'school-form', component: SchoolApiFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
