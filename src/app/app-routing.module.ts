import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {RegisterComponent} from './components/register/register.component';
import {InterfaceMessComponent} from './components/interface-mess/interface-mess.component';

const routes: Routes = [
  {path: '', redirectTo: '/main-menu', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'main-menu', component: MainMenuComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'interface', component: InterfaceMessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
