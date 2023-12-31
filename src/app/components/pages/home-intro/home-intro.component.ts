import { Component } from '@angular/core';  
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home-intro',
  templateUrl: './home-intro.component.html',
  styleUrls: ['./home-intro.component.scss']
})
export class HomeIntroComponent {
  displayStyle = "none";
  homeData:any;
  homedisplay=false;
  constructor(private ApiService:ApiService, public router: Router) {
    this.callData();
  }
  
  callData(){
    this.homeData=[]; 
    this.ApiService.getHome().subscribe((results:any)=>{
        //console.log(results.data);
        this.homeData=results.data;
        if(results.data.length>0){
          this.homedisplay=true;
          this.openPopup();
        }  
    })
  }
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
