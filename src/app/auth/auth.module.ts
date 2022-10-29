import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { RegistroComponentComponent } from './pages/registro-component/registro-component.component';
import { LoginComponentComponent } from './pages/login-component/login-component.component';


@NgModule({
  declarations: [
    RegistroComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    CommonModule,
    AutRoutingModule,
    ReactiveFormsModule
  ]
})
export class AutModule { }
