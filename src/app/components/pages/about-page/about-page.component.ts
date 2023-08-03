import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
  pagename=''; 
  serviceData:any;
  allService:any;
  constructor(private activeRoute: ActivatedRoute, public ApiService:ApiService) {
    this.activeRoute.params.subscribe((routeParams:any) => { 
      this.pagename=routeParams.aboutname; 
      this.callData();
    }); 
    
  }
  
  callData(){
    this.serviceData=[];
    
    if(this.pagename=='who-we-are'){
      this.ApiService.getWhoweareServices().subscribe((results:any)=>{
        console.log(results.data);
        this.serviceData=results.data; 
      })
    }
    if(this.pagename=='for-soldiers'){
      this.ApiService.getSoldiersServices().subscribe((results:any)=>{
        console.log(results.data);
        this.serviceData=results.data; 
      })
    }
    if(this.pagename=='for-people'){
      this.ApiService.getPeopleServices().subscribe((results:any)=>{
        console.log(results.data);
        this.serviceData=results.data; 
      })
    }
  }
}
