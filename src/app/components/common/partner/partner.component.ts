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
    constructor(
        public router: Router,
        public ApiService:ApiService
    ) {
        this.callData();
    }
    
    callData(){
        this.serviceData=[];
        this.ApiService.getServices().subscribe((results:any)=>{
        console.log(results);
            if(results.resultnum>0){
                this.serviceData=results.results;
            }
        })
      }
}