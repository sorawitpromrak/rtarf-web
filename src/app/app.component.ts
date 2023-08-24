import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = '';
    intropage:any;
    introdisplay=false;
    constructor(private ApiService:ApiService, public router: Router) {
      this.callHomeData();
    }
    
    callHomeData(){
      this.ApiService.getIntro().subscribe((results:any)=>{
          //console.log(results); 
          this.intropage=results.data 
          if(results.data.length>0){
            this.introdisplay=true
          }
      })
    }
}