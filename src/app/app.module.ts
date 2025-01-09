import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './components/login/login.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {RegisterComponent} from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainMenuComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
