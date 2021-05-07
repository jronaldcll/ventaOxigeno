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

    getProvidersByDistrict(distrito){      
      return this.http.get('https://localhost:44309/api/Provider/getProvidersByDistrict?distrito=' + distrito);
    }

        
    getSearchAllProvider(){      
      return this.http.get('https://localhost:44309/api/Provider/getSearchAllProvider');
    }

    getInsertNewProvider(data){      
      return this.http.post('https://localhost:44309/api/Provider/getInsertNewProvider',data);
    }

    postUpdateProvider(data){      
      return this.http.post('https://localhost:44309/api/Provider/postUpdateProvider',data);
    }


}

