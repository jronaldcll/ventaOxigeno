import { Component, OnInit } from '@angular/core';
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

  constructor(private readonly reserveService: ReserveService) { }

  getReservesByProvider(id: Number){    
    this.reserveService.getReservesByProvider(id).subscribe((rest: any) => {      
      this.reserves = rest.data;
      this.dtTrigger.next();
    })
  }

  ngOnInit(): void {
    this.getReservesByProvider(44);
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 4,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json'
      }
    };
    
  }

}
