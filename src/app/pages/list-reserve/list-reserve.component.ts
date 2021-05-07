import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ReserveService } from 'src/app/service/reserve.service';

@Component({
  selector: 'app-list-reserve',
  templateUrl: './list-reserve.component.html',
  styleUrls: ['./list-reserve.component.css']
})
export class ListReserveComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  reserves = [];

  constructor(private r:Router, private activeRoute: ActivatedRoute, private reserveService: ReserveService) { }

  ngOnInit(): void {    
    this.getReservesByProvider();    
  }

  getReservesByProvider(){
        
    let token = sessionStorage.getItem('token');
    let userString = sessionStorage.getItem('user');  
    let user = {
      loginUsuario: ''
    };
    if(userString){
      user = JSON.parse(userString);
    }

    this.reserveService.getReservesByProvider(user.loginUsuario,token).subscribe((rest: any) => {      
        if(rest.isSuccess){
          this.reserves = rest.data;          
          this.dtTrigger.next();
        } else {
            alert("Error al procesar la información");
        }
      });            
      
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        order: [4,'asc'],        
        language: {
          url: '//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json'
        }
      };

  }


  onClickAprobar(idreserve:any): void{
    let token = sessionStorage.getItem('token'); 
    this.reserveService.update_State_Reserve({id: idreserve, stateReserve:'1' },token).subscribe((rest: any) =>{
      if(rest.isSuccess){         
        var table = $('#miTabla').DataTable();
        table.destroy();      
        this.getReservesByProvider();               
      } 
      else{
        alert("Error al procesar la información");
      }
    });
  }
  onClickRechazar(idreserve:any): void{
    let token = sessionStorage.getItem('token'); 
    this.reserveService.update_State_Reserve({id: idreserve, stateReserve:'2' },token).subscribe((rest: any) =>{
      if(rest.isSuccess){
        var table = $('#miTabla').DataTable();
        table.destroy();
        this.getReservesByProvider();               
      }
      else{
        alert("Error al procesar la información");
      } 
    });

  }

}
