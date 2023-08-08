import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

    servicename:any;
    serviceshow:any;
    docsData:any; 
    currentTab = 'tab1';

    constructor(
        public router: Router,
        public activeRoute:ActivatedRoute,
        public ApiService: ApiService
    ) { 
        this.activeRoute.params.subscribe((routeParams:any) => { 
            this.servicename = routeParams.servicename;
            this.serviceshow = routeParams.serviceshow;
            if(this.servicename=='announcement'){ 
                this.currentTab = 'tab1';
            }
            if(this.servicename=='apply'){ 
                this.currentTab = 'tab2';
            }
            if(this.servicename=='budget'){ 
                this.currentTab = 'tab3';
            }
            this.callDoc();
        }); 
    }

    // for tab click event
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

    callDoc(){
        this.docsData=[];
        this.ApiService.getDocs().subscribe((results:any)=>{
            console.log(results);
            this.docsData=results.data;
        })
    }
}