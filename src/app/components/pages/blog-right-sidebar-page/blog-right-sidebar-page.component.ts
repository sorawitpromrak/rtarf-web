import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-blog-right-sidebar-page',
  templateUrl: './blog-right-sidebar-page.component.html',
  styleUrls: ['./blog-right-sidebar-page.component.scss']
})
export class BlogRightSidebarPageComponent {

  category=''; 
  page='';
  categoryname='';
  newsdata:any;
  constructor(private activeRoute: ActivatedRoute, public ApiService:ApiService) {
    this.activeRoute.params.subscribe((routeParams:any) => { 
      this.category=routeParams.category; 
      this.page=routeParams.page; 
      this.categoryname=routeParams.categoryname; 
      this.callData(this.category)
    }); 
  }
  
  callData(cat:any){
    this.newsdata=[];
    this.ApiService.getNews(cat).subscribe((results:any)=>{
      console.log(results.data);
      this.newsdata=results.data; 
    })
  }
}
