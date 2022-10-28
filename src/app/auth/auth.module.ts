import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutRoutingModule } from './auth-routing.module';

import { RegistroComponentComponent } from './pages/registro-component/registro-component.component';
import { LoginComponentComponent } from './pages/login-component/login-component.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistroComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AutRoutingModule
  ]
})
export class AutModule { }
