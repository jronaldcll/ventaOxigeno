import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { ProviderService } from 'src/app/service/provider.service';

@Component({
  selector: 'app-home-provider',
  templateUrl: './home-provider.component.html',
  styleUrls: ['./home-provider.component.css']
})
export class HomeProviderComponent implements OnInit {

  constructor(private r:Router,
    private router: Router,
    private activeRoute: ActivatedRoute, 
    private serviceProvider: ProviderService) { }
  dtOptions:DataTables.Settings={}

  dtTrigger = new Subject();
  provider =[];

  ngOnInit(): void {
    this.CargaProveedores();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json'
      }
    };
  }

  CargaProveedores(){
    let salida=this.serviceProvider.getSearchAllProvider().subscribe((rest: any) =>{
        if(rest.isSuccess){
          this.provider = rest.data;
          this.dtTrigger.next();
      }
    }) 
}

ActualizaProvider(id){
  this.router.navigate(['/editprovider',id]);

}

}
