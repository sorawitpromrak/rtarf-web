import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-agency-page',
  templateUrl: './agency-page.component.html',
  styleUrls: ['./agency-page.component.scss']
})
export class AgencyPageComponent {
  open=0; 
  constructor(private activeRoute: ActivatedRoute, public ApiService:ApiService) { 
    
  }
  toggle(id:any){
    if(this.open==id){
      this.open=0;
    } else {
      this.open=id
    }
  }
}
