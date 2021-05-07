import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProviderService } from 'src/app/service/provider.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-register-provider',
  templateUrl: './register-provider.component.html',
  styleUrls: ['./register-provider.component.css']
})

export class RegisterProviderComponent implements OnInit {
  
  datosForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    ruc: ['',[Validators.required]],
    name: ['',[Validators.required]],
    address: ['',[Validators.required]],
    district: ['',[Validators.required]],
    firtsname_representative: ['',[Validators.required]],
    lastname_representative: ['',[Validators.required]]
});

 // constructor(private fb:FormBuilder) { }
  constructor(private r:Router,
    private fb:FormBuilder,
    private activeRoute: ActivatedRoute, 
    private serviceProvider: ProviderService) { }
  dtOptions:DataTables.Settings={}

setData(user){
        sessionStorage.setItem('user',user);
        let a = document.createElement("a");
		a.href = "/homeprovider";
		a.target = "_SELF";
		a.click();
    }
  ngOnInit(): void {
  }

  onSubmit(){
    if(this.datosForm.valid){
        let res = this.serviceProvider.getInsertNewProvider({
            ...this.datosForm.value           
        }).subscribe((rest: any) =>{
            if(rest.isSuccess){
                console.log(rest);
                $("#alert").html("<div class='alert alert-success alert-dismissible fade show' role='alert'><strong>REGISTRO EXITOSO!</strong><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>");
                this.datosForm.reset();
            } else if(rest.data=='0') {
                $("#alert").html("<div class='alert alert-warning alert-dismissible fade show' role='alert'><strong>Uppss!</strong> El correo ingresado no existe como usuario.<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>");
            }
        },(error)=>{
            $("#alert").html("<div class='alert alert-warning alert-dismissible fade show' role='alert'><strong>Uppss!</strong> "+error.message+" <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>");
        });
    } else {
      $("#alert").html("<div class='alert alert-warning alert-dismissible fade show' role='alert'><strong>Uppss!</strong> Hubo Un Error al registrar.<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>");
       
    }
    
}

  
}
