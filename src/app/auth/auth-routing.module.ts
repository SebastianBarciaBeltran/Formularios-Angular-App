import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponentComponent } from './pages/login-component/login-component.component';
import { RegistroComponentComponent } from './pages/registro-component/registro-component.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'registro', component: RegistroComponentComponent},
      { path: 'login', component: LoginComponentComponent},
      { path: '**', redirectTo: 'registro' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AutRoutingModule { }
