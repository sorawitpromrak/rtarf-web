import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
    selector: 'app-faq-page',
    templateUrl: './faq-page.component.html',
    styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {
    pagedata:any;
    constructor(private ApiService:ApiService) {
        this.callData();
    }

    ngOnInit(): void {}
    
    callData(){
        this.ApiService.getFaq().subscribe((results:any)=>{
            console.log(results); 
            this.pagedata=results.data 
        })
    }
    
    selectedItem : any = null;

    toggleAccordionItem(item:any) {
        item.open = !item.open;
        if (this.selectedItem && this.selectedItem !== item) {
            this.selectedItem.open = false;
        }
        this.selectedItem = item;
    }

}