import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-provider',
  templateUrl: './register-provider.component.html',
  styleUrls: ['./register-provider.component.css']
})
export class RegisterProviderComponent implements OnInit {
  
  datosForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    ruc: ['',[Validators.required]],
    nombreempresa: ['',[Validators.required]],
    direccion: ['',[Validators.required]],
    nombrerepresentante: ['',[Validators.required]],
    apellidos: ['',[Validators.required]],
    estado: ['',[Validators.required]]
});
  constructor(private fb:FormBuilder) { }

  onSetDatos(event){
    event.preventDefault();
    if(this.datosForm.valid){
        //this.r.navigate(['/provider']);
        this.setData(this.datosForm.value.correo);
        console.log(this.datosForm.value);
    } else {
        alert('Faltan ingresar datos o Datos incorrectos');
    }
}
setData(user){
        sessionStorage.setItem('user',user);
        let a = document.createElement("a");
		a.href = "/homeprovider";
		a.target = "_SELF";
		a.click();
    }
  ngOnInit(): void {
  }

}
