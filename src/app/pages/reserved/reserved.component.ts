import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ReserveService } from 'src/app/service/reserve.service';

@Component({
  selector: 'app-reserved',
  templateUrl: './reserved.component.html',
  styleUrls: ['./reserved.component.css']
})
export class ReservedComponent implements OnInit {

    reserves = [];

    constructor(private r:Router,
                private activeRoute: ActivatedRoute,
                private serviceReserve: ReserveService) { }

    ngOnInit(): void {
        this.activeRoute.params.subscribe((params : Params) =>{
            if(params.user){
                let token = sessionStorage.getItem('token');
                let userString = sessionStorage.getItem('user');
                let user = {
                    idUser: 0
                };
                if(userString){
                    user = JSON.parse(userString);
                }
                if(token && user.idUser == params.user){
                    let salida = this.serviceReserve.getReservesByUser(params.user,token).subscribe((rest: any) =>{
                        if(rest.isSuccess){
                            this.reserves = rest.data;
                        } else {
                            this.r.navigate(['/']);
                        }
                    });
                } else {
                    this.r.navigate(['/']);
                }
            } else {
                this.r.navigate(['/']);
            }
        });
    }

}
