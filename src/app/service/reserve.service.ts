import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {

  constructor(private readonly http: HttpClient) {}
    
  getReservesByProvider(id,token){
    const header = { Authorization: 'Bearer ' + token }
    return this.http.get('https://localhost:44309/api/Project/getReservesByProvider?idProvider=' + id,{ headers: header });
  }

  getReservesByUser(id,token){
    const header = { Authorization: 'Bearer ' + token }
    return this.http.get('https://localhost:44309/api/Project/getReservesByUser?id=' + id,{
      headers: header
    });
  }

  createReserve(reserve,token){
    const header = { Authorization: 'Bearer ' + token }
    return this.http.post('https://localhost:44309/api/Project/createReserve',reserve,{
      headers: header
    });
  }

  update_State_Reserve(reserve,token){
    const header = { Authorization: 'Bearer ' + token }
    return this.http.post('https://localhost:44309/api/Project/update_State_Reserve',reserve,{ headers: header });
  }
}
