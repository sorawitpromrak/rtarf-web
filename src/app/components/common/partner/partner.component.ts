import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
    selector: 'app-partner',
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.scss']
})
export class PartnerComponent {
    serviceData:any;
    allService:any;
    constructor(
        public router: Router,
        public ApiService:ApiService
    ) {
        this.callData();
    }
    
    callData(){
        this.serviceData=[];
        this.ApiService.getServices().subscribe((results:any)=>{
            console.log(results.data);
            this.allService=results.data;
            this.serviceData=this.allService.find((item:any) => item.hone);
        })
      }
}