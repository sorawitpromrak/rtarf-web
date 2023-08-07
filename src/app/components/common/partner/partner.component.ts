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
        this.ApiService.getHomeServices().subscribe((results:any)=>{
            console.log(results.data);
            this.serviceData=results.data;  
        })
    }
}