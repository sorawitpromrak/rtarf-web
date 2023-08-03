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
    this.ApiService.getServices().subscribe((results:any)=>{
        console.log(results.data);
        this.allService=results.data; 
        this.serviceData=this.allService.find((item:any) => item.for == this.pagename);
    })
  }
}
