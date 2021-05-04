import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

    roles = [
        /*{id: 1,name:'ADMIN'},*/
        {id: 2,name: 'USER',text:'Normal'},
        {id: 3,name:'PROVIDER', text:'Proveedor'}
    ];

    userForm = this.fb.group({
        name: ['',Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['',Validators.required],
        role: new FormControl(this.roles[0])
    });

    isLoading = false;

    constructor(private fb:FormBuilder, private service:UserService, private router: Router) { }

    ngOnInit(): void {
    }

    onSubmit(){
        if(this.userForm.valid){
            this.isLoading = true;
            let res = this.service.register({
                ...this.userForm.value,
                role: this.userForm.value.role.name
            }).subscribe((rest: any) =>{
                if(rest.isSuccess){
                    console.log(rest);
                    $("#alert").html("<div class='alert alert-success alert-dismissible fade show' role='alert'><strong>REGISTRADO!</strong> Serás automaticamente redireccionado al login.<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>");
                    setTimeout(()=>{
                        this.router.navigate(['/login']);
                    },3000);
                } else {
                    $("#alert").html("<div class='alert alert-warning alert-dismissible fade show' role='alert'><strong>Uppss!</strong> El correo ingresado ya está en uso.<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>");
                }
                this.isLoading = false;
                
            });
        } else {
            alert('Formulario no válido');
        }
        
    }

}
