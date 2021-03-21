import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';


const routes: Routes=[
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registerUser', component: RegisterUserComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}