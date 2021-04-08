import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Venta de Oxigeno';
    user = '';
    correo = '';
    ngOnInit() {
        if(sessionStorage.getItem('user')){
            this.correo = sessionStorage.getItem('user');
            if(this.correo == 'admin@mail.com'){
                this.user = 'admin';
            } else {
                if(this.correo == 'factory@mail.com'){
                    this.user = 'factory';
                } else {
                    this.user = 'Usuario';
                }
                
            }
        }
    }

    isAdmin(){
        return this.user == 'admin' ? true : false;
    }

    isProvider(){
        return this.user == 'factory' ? true : false;
    }

    isOnline(){
        return this.user == '' ? false: true;
    }

    logout(){
        sessionStorage.removeItem('user');
        let a = document.createElement("a");
		a.href = "/login";
		a.target = "_SELF";
		a.click();
    }
}
