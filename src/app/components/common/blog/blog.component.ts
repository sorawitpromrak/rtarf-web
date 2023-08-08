import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import Swiper from 'swiper';

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
        new Swiper('.swiper', {
            slidesPerView: 3,
            grid: {
              rows: 3,
            },
            mousewheel: {
              forceToAxis: true,
            },
            preventClicks: false,
            preventClicksPropagation: false,
        });
        this.callData('commander'); 
    }
    

    callData(cat:any){
        this.newsdata=[];
        this.ApiService.getNews(cat).subscribe((results:any)=>{ 
            //console.log(results.data)
            this.newsdata=results.data; 
            console.log(this.newsdata);
        })
      }

}