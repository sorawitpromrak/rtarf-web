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
        if(this.pagename=='who-we-are'){
          this.serviceData=this.allService.find((item:any) => item.forwhoweare);
        }
        if(this.pagename=='for-soldiers'){
          this.serviceData=this.allService.find((item:any) => item.forsoldiers);
        }
        if(this.pagename=='for-people'){
          this.serviceData=this.allService.find((item:any) => item.forpeople);
        }
    })
  }
}
