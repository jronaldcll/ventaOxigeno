import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ProviderService {

    constructor(private readonly http : HttpClient) { }

    searchById(id) {
        return this.http.post<any>('https://localhost:44309/api/Provider/searchById?id='+id, null);
    }
}

