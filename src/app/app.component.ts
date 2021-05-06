import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    constructor(private r: Router){}
    title = 'Venta de Oxigeno';
    user = {
        idUser: 0,
        nombres: "",
        role: ""
    };
    correo = '';
    ngOnInit() {
        if(sessionStorage.getItem('user')){
            this.user = JSON.parse(sessionStorage.getItem('user'));
            console.log(this.user);
        }
    }

    isAdmin(){
        return this.user.role == 'ADMIN' ? true : false;
    }

    isProvider(){
        return this.user.role == 'PROVIDER' ? true : false;
    }

    isOnline(){
        return this.user ? true: false;
    }

    logout(){
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
        let a = document.createElement("a");
		a.href = "/login";
		a.target = "_SELF";
		a.click();
    }

    verMisReservas(){
        if(this.user){
            this.r.navigate(['/reserved/'+this.user.idUser]);
        }
    }
}
