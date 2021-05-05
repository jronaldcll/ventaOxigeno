import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/service/provider.service';

@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css']
})
export class ListProviderComponent implements OnInit {

  providers = [];

  constructor(private readonly providerService: ProviderService) { }

  getProvidersByDistrict(distrito: string){    
    this.providerService.getProvidersByDistrict(distrito).subscribe((rest: any) => {      
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

      console.log(this.providers);      
      
    })
  }

  ngOnInit(): void {
  }
  onChange(distrito:any): void{
    this.getProvidersByDistrict(distrito);
  }

}
