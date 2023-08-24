import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';
import { ViewEncapsulation } from '@angular/core'
@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
  encapsulation: ViewEncapsulation.None
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
      //console.log(results);
      if(results.data.length>0){
        this.pagedata=results.data[0] 
        this.pageshow=this.pagedata.attributes.show
        this.pagedetail=this.pagedata.attributes.detail  
        this.pagedetail = this.pagedetail.replace('"/uploads/', '"http://rtarf2023.rtarf.mi.th:1337/uploads/'); 
        this.pagedetail = this.pagedetail.replace('"/uploads/', '"http://rtarf2023.rtarf.mi.th:1337/uploads/'); 
        this.pagedetail = this.pagedetail.replace(', /uploads/', ', http://rtarf2023.rtarf.mi.th:1337/uploads/'); 
        this.pagedetail = this.pagedetail.replace(', /uploads/', ', http://rtarf2023.rtarf.mi.th:1337/uploads/'); 
        this.pagedetail = this.pagedetail.replace(', /uploads/', ', http://rtarf2023.rtarf.mi.th:1337/uploads/'); 
        //console.log(this.newsdetail);
        //this.pagedetail.replace('src="/uploads/', 'src="http://rtarf2023.rtarf.mi.th:1337/uploads/'); 
      }else{
        this.pageshow='ไม่พบข้อมูล'
        this.pagedetail='ไม่พบข้อมูล'
      }
    })
  }
}
