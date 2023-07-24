import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-blog-details-page',
  templateUrl: './blog-details-page.component.html',
  styleUrls: ['./blog-details-page.component.scss']
})
export class BlogDetailsPageComponent {
  newsid:any;
  newsname:any; 
  content:any;
  constructor(private activeRoute: ActivatedRoute, public ApiService:ApiService) {
    this.activeRoute.params.subscribe((routeParams:any) => { 
      this.newsid=routeParams.id; 
      this.newsname=routeParams.name;
      this.callData(this.newsid);
    }); 
  }
  
  callData(newsid:any){ 
    this.ApiService.getNewsdetail(newsid).subscribe((results:any)=>{ 
      this.content=results.data  
    })
  }
}
