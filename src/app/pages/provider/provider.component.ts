import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { ProviderService } from 'src/app/service/provider.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

    constructor(private r:Router,
                private activeRoute: ActivatedRoute, 
                private serviceProvider: ProviderService,
                private serviceProduct: ProductService) { }

    provider = {
        name: '',
        address: '',
        image: '',
        hourStart: '',
        hourEnd: '',
        email: ''
    }

    products = [];

    ngOnInit(): void {
        this.activeRoute.params.subscribe((params : Params) =>{
            if(params.id){
                let salida = this.serviceProvider.searchById(params.id).subscribe((rest: any) =>{
                    if(rest.isSuccess){
                        this.provider = rest.data;
                        this.traerProductos(params.id);
                    } else {
                        this.r.navigate(['/']);
                    }
                    console.log(rest); 
                });
            } else {
                this.r.navigate(['/']);
            }
        });
    }

    traerProductos(id){
        let salida = this.serviceProduct.searchByProviderId(id).subscribe((rest: any) =>{
            if(rest.isSuccess){
                this.products = rest.data;
            }
            console.log(rest); 
        });
    }

    reserve(){
        if(sessionStorage.getItem('user')){
            this.r.navigate(['/reserve']);
        } else {
            this.r.navigate(['/login']);
        }
    }

}
