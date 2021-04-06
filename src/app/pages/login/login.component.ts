import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    datosForm = this.fb.group({
        correo: ['',[Validators.required, Validators.email]],
        password: ['',[Validators.required]]
    });

    constructor(private fb: FormBuilder, private r: Router) { }

    onLogin(event){
        event.preventDefault();
        if(this.datosForm.valid){
            //this.r.navigate(['/provider']);
            this.setData(this.datosForm.value.correo);
            console.log(this.datosForm.value);
        } else {
            alert('Formulario no válido');
        }
    }

    setData(user){
        sessionStorage.setItem('user',user);
        let a = document.createElement("a");
		a.href = "/listProvider";
		a.target = "_SELF";
		a.click();
    }

    ngOnInit(): void {
    }

}
