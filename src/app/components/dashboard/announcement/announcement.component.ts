import { Component, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service'; 
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {
  servicename:any;
  serviceshow:any;
  docsData:any;
  constructor(private activeRoute: ActivatedRoute, public ApiService:ApiService) {
    this.activeRoute.params.subscribe((routeParams:any) => { 
      this.servicename = routeParams.servicename;
      this.serviceshow = routeParams.serviceshow;
      this.callDoc();
    }); 
  }
  
  callDoc(){
    this.docsData=[];
    this.ApiService.getDocs().subscribe((results:any)=>{
    console.log(results);
        if(results.resultnum>0){
            this.docsData=results.results;
        }
    })
  }
}
