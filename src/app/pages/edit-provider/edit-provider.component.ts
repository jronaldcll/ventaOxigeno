import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute,Params } from '@angular/router';
import { ProviderService } from 'src/app/service/provider.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-provider',
  templateUrl: './edit-provider.component.html',
  styleUrls: ['./edit-provider.component.css']
})
export class EditProviderComponent implements OnInit {
  idprovider : {id:String};


  constructor( private rutaActiva : ActivatedRoute,
    private fb:FormBuilder,
    private serviceProvide : ProviderService) { 
  }
  
  datosForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    ruc: ['',[Validators.required]],
    name: ['',[Validators.required]],
    address: ['',[Validators.required]],
    district: ['',[Validators.required]],
    firtsname_representative: ['',[Validators.required]],
    lastname_representative: ['',[Validators.required]]
});

  provider = {
    id: '',
    name: '',
    district: '',
    address: '',
    state: '',
    hourEnd: '',
    email: '',
    ruc: '',
    firtsname_representative:'',
    lastname_representative:'',
}

  ngOnInit() {
    console.log(this.rutaActiva);
    this.idprovider={
      id:this.rutaActiva.snapshot.params.id
    }
    this.serviceProvide.searchById(this.idprovider.id).subscribe((rest: any) =>{
      if(rest.isSuccess){
        this.provider = rest.data;
        this.datosForm.get('email').setValue(this.provider.email);
        this.datosForm.get('ruc').setValue(this.provider.ruc);
        this.datosForm.get('name').setValue(this.provider.name);
        this.datosForm.get('address').setValue(this.provider.address);
        this.datosForm.get('district').setValue(this.provider.district);
        this.datosForm.get('firtsname_representative').setValue(this.provider.firtsname_representative);
        this.datosForm.get('lastname_representative').setValue(this.provider.lastname_representative);
    }
  }) 
  }

 
    ActualizaProveedores(){
      if(this.datosForm.valid){
          let res = this.serviceProvide.postUpdateProvider({
              ...this.datosForm.value           
          }).subscribe((rest: any) =>{
              if(rest.isSuccess){
                  console.log(rest);
                  $("#alert").html("<div class='alert alert-success alert-dismissible fade show' role='alert'><strong>ACTUALIZACION EXITOSA!</strong><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>");
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
