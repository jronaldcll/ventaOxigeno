import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {

  constructor(private readonly http: HttpClient) {}
    
  getReservesByProvider(id){
    return this.http.get('https://localhost:44309/api/Project/getReservesByProvider?idProvider=' + id);
  }
}
