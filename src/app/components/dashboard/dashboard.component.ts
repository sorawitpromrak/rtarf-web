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

    announcementDocs:any;
    budgetDocs:any;
    infoDocs:any;
    journalDocs:any;
    videoDocs:any;
    applyDocs:any;
    formDocs:any;

    constructor(
        public router: Router,
        public activeRoute:ActivatedRoute,
        public ApiService: ApiService
    ) { 
        this.activeRoute.params.subscribe((routeParams:any) => { 
            this.servicename = routeParams.servicename;
            this.serviceshow = routeParams.serviceshow;
            if(this.servicename=='apply'){ 
                this.currentTab = 'tab0';
            }
            if(this.servicename=='announcement'){ 
                this.currentTab = 'tab1';
            }
            if(this.servicename=='budget'){ 
                this.currentTab = 'tab2';
            }
            if(this.servicename=='infographic'){ 
                this.currentTab = 'tab3';
            }
            if(this.servicename=='form'){ 
                this.currentTab = 'tab6';
            }
            if(this.servicename=='journal'){ 
                this.currentTab = 'tab4';
            }
            if(this.servicename=='video'){ 
                this.currentTab = 'tab5';
            }
            this.callDoc('announcement');
        }); 
    }

    // for tab click event
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }


    callDoc(type:string){
        this.announcementDocs=[];
        this.ApiService.getDocsCategory('announcement', 20).subscribe((results:any)=>{
            //console.log(results);
            this.announcementDocs=results.data;
        });
        
        this.budgetDocs=[];
        this.ApiService.getDocsCategory('budget', 20).subscribe((results:any)=>{
            //console.log(results);
            this.budgetDocs=results.data;
        });
        
        this.infoDocs=[];
        this.ApiService.getDocsCategory('infographic', 20).subscribe((results:any)=>{
            //console.log(results);
            this.infoDocs=results.data;
        });
        
        this.journalDocs=[];
        this.ApiService.getDocsCategory('journal', 20).subscribe((results:any)=>{
            //console.log(results);
            this.journalDocs=results.data;
        });

        this.videoDocs=[];
        this.ApiService.getDocsCategory('video', 20).subscribe((results:any)=>{
            //console.log(results);
            this.videoDocs=results.data;
        });

        this.applyDocs=[];
        this.ApiService.getDocsCategory('apply', 20).subscribe((results:any)=>{
            //console.log(results);
            this.applyDocs=results.data;
        });
        this.formDocs=[];
        this.ApiService.getDocsCategory('form', 20).subscribe((results:any)=>{
            //console.log(results);
            this.formDocs=results.data;
        });
    }
}