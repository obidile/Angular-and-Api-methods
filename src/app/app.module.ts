import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDataComponent } from './user-data/user-data.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { OwnListComponent } from './own-list/own-list.component';
import { OwnFormComponent } from './own-form/own-form.component';
import { SchoolsApiComponent } from './schools-api/schools-api.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileDatailComponent } from './profile-datail/profile-datail.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    UserListComponent,
    UserFormComponent,
    UserDetailComponent,
    OwnListComponent,
    OwnFormComponent,
    SchoolsApiComponent,
    ProfileListComponent,
    ProfileDatailComponent,
    ProfileFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
