import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { HttpClientModule } from '@angular/common/http';
import {UsersService} from './services/users.service';
import { CreateUserComponent } from './componants/create-user/create-user.component';
import {ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    UsersComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
