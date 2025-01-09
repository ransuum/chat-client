import { Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {RegisterComponent} from './components/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/main-menu', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main-menu', component: MainMenuComponent },
  { path: "register", component: RegisterComponent },
];
