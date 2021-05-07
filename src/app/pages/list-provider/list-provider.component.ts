import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderService } from 'src/app/service/provider.service';

@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css']
})
export class ListProviderComponent implements OnInit {

  providers = [];

  constructor(private readonly providerService: ProviderService, private r: Router) { }

  getProvidersByDistrict(distrito: string){    
    this.providerService.getProvidersByDistrict(distrito).subscribe((rest: any) => {      
      if(rest.isSuccess){   
        this.providers = rest.data;
        var dist = google.maps.geometry.spherical.computeDistanceBetween;
        navigator.geolocation.getCurrentPosition(position => {
          const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          }        
          this.providers.forEach(function(pt){                
            pt.distance = (dist(new google.maps.LatLng(pos.lat, pos.lng),new google.maps.LatLng(pt.latitude, pt.longitude))/1000).toFixed(2);                        
        })
        this.providers.sort(function(a, b){return a.distance - b.distance});
        });      
      }
      else {
        alert("Error al procesar la información");
      }
    })
  }

  ngOnInit(): void {
    this.getProvidersByDistrict('');
  }
  onChange(distrito:any): void{
    this.getProvidersByDistrict(distrito);
  }

  go(item){
    console.log(item.openOrClosed);
    if(item.openOrClosed == 'True'){
      this.r.navigate(['/provider/'+item.id]);
    }
  }

}
