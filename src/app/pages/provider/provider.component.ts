import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  constructor(private r:Router) { }

  ngOnInit(): void {
  }

  reserve(){
    if(sessionStorage.getItem('user')){
      this.r.navigate(['/reserve']);
    } else {
      this.r.navigate(['/login']);
    }
    
  }

}
