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
    this.callNewsData();
  }

  callData(){
    this.ApiService.getCategory().subscribe((results:any)=>{
      console.log(results.data); 
      this.catdata=results.data;
    })
  }
  
  callNewsData(){
    this.ApiService.getLastestNews().subscribe((results:any)=>{ 
      this.newsdata=results.data  
    })
  }
  
}
