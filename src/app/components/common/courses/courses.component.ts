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
    constructor(
        public router: Router,
        public ApiService: ApiService
    ) { 
        this.callData();
        this.callDoc();
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
        console.log(results);
            if(results.resultnum>0){
                this.newsData=results.results;
            }
        })
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