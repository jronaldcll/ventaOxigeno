import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

    constructor( private fb: FormBuilder) { }

    multiply(a,b){
        return parseFloat(a)*parseFloat(b);
    }

    ngOnInit(): void {
    }

}
