import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProviderComponent } from './pages/provider/provider.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReserveComponent } from './pages/reserve/reserve.component';
import { ReservedComponent } from './pages/reserved/reserved.component';

import { ListProviderComponent } from  './pages/list-provider/list-provider.component';
import { ListReserveComponent } from  './pages/list-reserve/list-reserve.component';
import { HomeProviderComponent } from './pages/home-provider/home-provider.component';
import { EditProviderComponent } from './pages/edit-provider/edit-provider.component';
import { RegisterProviderComponent } from './pages/register-provider/register-provider.component';


const routes: Routes=[
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registerUser', component: RegisterUserComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'provider', component: ProviderComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'reserve', component: ReserveComponent },
    { path: 'reserved', component: ReservedComponent},
    { path: 'listProvider', component: ListProviderComponent },
    { path: 'listReserve', component: ListReserveComponent },
    { path: 'homeprovider', component: HomeProviderComponent },
    { path: 'editprovider', component: EditProviderComponent },
    { path: 'registerprovider', component: RegisterProviderComponent },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}