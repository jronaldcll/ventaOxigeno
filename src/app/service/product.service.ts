import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

    constructor(private readonly http : HttpClient) { }

    searchByProviderId(id) {
        return this.http.get<any>('https://localhost:44309/api/Product/searchByProviderId?id='+id);
    }
}
