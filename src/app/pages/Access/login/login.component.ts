import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    datosForm = this.fb.group({
        loginUsuario: ['',[Validators.required, Validators.email]],
        passwordUsuario: ['',[Validators.required]]
    });

    constructor(private fb: FormBuilder, private readonly userService : UserService, private router: Router) { }

    login(datauser){
        this.userService.login(datauser).subscribe((rest : any)=>{
            if(rest.isSuccess){
                sessionStorage.setItem('token', rest.data.token);
                //this.setData(this.datosForm.value.correo);
                this.setData(rest.data);
                this.router.navigate(['provider']);
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error de conexión!',
                    footer: '<a href>Validar información</a>'
                  })

                  this.onClean();
            }
        })
    }

    onSubmit(){
        if(this.datosForm.valid){
            this.login(this.datosForm.value);
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Datos invalidos!',
            footer: '<a href>Validar información</a>'
          })

          this.onClean();
    }
    }

    setData(user){
        sessionStorage.setItem('user', JSON.stringify(user));
        let a = document.createElement("a");
		a.href = "/listProvider";
		a.target = "_SELF";
		a.click();
    }

    onClean(){
        this.datosForm.reset();
      }

    ngOnInit(): void {
    }

}
