import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

    newsdata:any;
    constructor(
        public router: Router,
        public ApiService: ApiService
    ) { 
        this.callData('commander')
    }
    

    callData(cat:any){
        this.newsdata=[];
        this.ApiService.getNews(cat).subscribe((results:any)=>{
        console.log(results);
            if(results.resultnum>0){
                this.newsdata=results.results;
            }
        })
      }

}