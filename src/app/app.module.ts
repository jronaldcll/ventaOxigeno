import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { AppRoutingModule } from './app-routing.module';
import { ProviderComponent } from './pages/provider/provider.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReserveComponent } from './pages/reserve/reserve.component';

import { ListProviderComponent } from './pages/list-provider/list-provider.component';
import { ListReserveComponent } from './pages/list-reserve/list-reserve.component';

import { ReactiveFormsModule} from '@angular/forms';
import { ReservedComponent } from './pages/reserved/reserved.component';
import { HomeProviderComponent } from './pages/home-provider/home-provider.component';
import { RegisterProviderComponent } from './pages/register-provider/register-provider.component';
import { EditProviderComponent } from './pages/edit-provider/edit-provider.component';
import { DataTablesModule } from 'angular-datatables';
import { LandingComponent } from './pages/landing/landing.component';
import { TosComponent } from './pages/tos/tos.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterUserComponent,
    ProviderComponent,
    RegisterComponent,
    ReserveComponent,
    ReservedComponent,
    ListProviderComponent,
    ListReserveComponent,
    HomeProviderComponent,
    RegisterProviderComponent,
    EditProviderComponent,
    LandingComponent,
    TosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
