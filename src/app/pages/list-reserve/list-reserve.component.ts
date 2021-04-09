import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reserve',
  templateUrl: './list-reserve.component.html',
  styleUrls: ['./list-reserve.component.css']
})
export class ListReserveComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 4,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json'
      }
    };
    //$('#miTabla').DataTable();
  }

}
