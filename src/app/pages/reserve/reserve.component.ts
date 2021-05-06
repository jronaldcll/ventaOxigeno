import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { ProviderService } from 'src/app/service/provider.service';
import { ReserveService } from 'src/app/service/reserve.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

    pedidoForm = this.fb.group({
        cantidad: [1],
        precio: [2500]
    });

    total( a: number,b: number){
        return a * b;
    }

    pedido = {
        cantidad: 0,
        precio: 2500,
        total: function(){
            return this.cantidad * this.precio;
        }
    }


    provider = {
        name: '',
        address: '',
        image: '',
        hourStart: '',
        hourEnd: '',
        email: ''
    }

    products = [];
    product = {
        id: 0,
        name: '',
        image: '',
        price: 0,
        providerId: 0,
    }

    constructor( private fb: FormBuilder,
                private r:Router,
                private activeRoute: ActivatedRoute,
                private serviceProvider: ProviderService,
                private serviceProduct: ProductService,
                private serviceReserve: ReserveService ) { }

    multiply(a,b){
        return parseFloat(a)*parseFloat(b);
    }

    ngOnInit(): void {
        this.activeRoute.params.subscribe((params : Params) =>{
            if(params.provider){
                let salida = this.serviceProvider.searchById(params.provider).subscribe((rest: any) =>{
                    if(rest.isSuccess){
                        this.provider = rest.data;
                        this.traerProductos(params.provider,params.product);
                    } else {
                        this.r.navigate(['/']);
                    }
                });
            } else {
                this.r.navigate(['/']);
            }
        });
    }

    traerProductos(id,idP){
        let salida = this.serviceProduct.searchByProviderId(id).subscribe((rest: any) =>{
            if(rest.isSuccess){
                let salida = rest.data;
                this.products = [];
                salida.forEach(p =>{
                    if(p.id == idP ){
                        this.product = p;
                    } else {
                        this.products.push(p);
                    }
                });
                
            } 
        });
    }

    crearReserva(){
        let token = sessionStorage.getItem('token');
        let user = JSON.parse(sessionStorage.getItem('user'));
        if(token){
            this.serviceReserve.createReserve({
                quantity: this.pedidoForm.value.cantidad + '',
                price: this.product.price + '',
                userId: user.idUser,
                productId: this.product.id
            },token).subscribe((rest: any) =>{
                if(rest.isSuccess){
                    this.r.navigate(['/reserved/'+user.idUser]);                    
                } else {
                    console.log('Ocurrio un error');
                }
            });
        }
    }


    reserve(product){
        this.r.navigate(['/reserve/'+product.providerId+'/'+product.id]);
    }

}
