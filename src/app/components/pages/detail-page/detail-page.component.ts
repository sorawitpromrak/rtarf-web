import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  pagename: any;
  pagedata:any;
  pagedetail= 'กำลังเรียกข้อมูล';
  pageshow='กำลังเรียกข้อมูล';
  constructor(private activeRoute: ActivatedRoute, private http:HttpClient, public ApiService:ApiService) {
    this.activeRoute.params.subscribe((routeParams:any) => { 
      this.callData(routeParams.pagename);
    }); 
  }
  ngOnInit(): void {

  }

  callData(pagename:any){
    this.ApiService.getpageDetail(pagename).subscribe((results:any)=>{
      console.log(results);
      if(results.resultnum>0){
        this.pagedata=results.results[0]
        console.log(this.pagedata)
        this.pageshow=this.pagedata.show
        this.pagedetail=this.pagedata.detail
      } else { 
        this.pageshow='ขออภัย ไม่พบข้อมูล'
        this.pagedetail='ขออภัย ไม่พบข้อมูล'
      }
    })
  }
}
