import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
    newsData:any;
    docsData:any;
    announcementDocs:any;
    budgetDocs:any;
    infoDocs:any;
    journalDocs:any;
    videoDocs:any;

    constructor(
        public router: Router,
        public ApiService: ApiService
    ) { 
        this.callData();
        this.callDoc('announcement');
    }

    // for tab click event
    currentTab = 'tab0';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

    isOpen = false;

    openPopup(): void {
        this.isOpen = true;
    }

    closePopup(): void {
        this.isOpen = false;
    }
    
    callData(){
        this.newsData=[];
        this.ApiService.getActivity().subscribe((results:any)=>{
            //console.log(results);
            this.newsData=results.data; 
        })
    }
    
    callDoc(type:string){
        this.announcementDocs=[];
        this.ApiService.getDocsCategory('announcement', 5).subscribe((results:any)=>{
            //console.log(results);
            this.announcementDocs=results.data;
        });
        
        this.budgetDocs=[];
        this.ApiService.getDocsCategory('budget', 5).subscribe((results:any)=>{
            //console.log(results);
            this.budgetDocs=results.data;
        });
        
        this.infoDocs=[];
        this.ApiService.getDocsCategory('infographic', 5).subscribe((results:any)=>{
            //console.log(results);
            this.infoDocs=results.data;
        });
        
        this.journalDocs=[];
        this.ApiService.getDocsCategory('journal', 5).subscribe((results:any)=>{
            //console.log(results);
            this.journalDocs=results.data;
        });

        this.videoDocs=[];
        this.ApiService.getDocsCategory('video', 5).subscribe((results:any)=>{
            //console.log(results);
            this.videoDocs=results.data;
        });
        
    }
}