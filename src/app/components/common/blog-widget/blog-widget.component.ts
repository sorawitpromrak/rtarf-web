import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-blog-widget',
  templateUrl: './blog-widget.component.html',
  styleUrls: ['./blog-widget.component.scss']
})
export class BlogWidgetComponent {
  catdata:any;
  newsdata:any;
  
  constructor(private ApiService:ApiService) {
    this.callData();
  }
  callData(){
    this.ApiService.getCategory().subscribe((results:any)=>{
    console.log(results);
    if(results.resultnum>0){
        this.catdata=results.results 
        this.newsdata=results.news 
        console.log(this.catdata)
    }
    })
  }
}
