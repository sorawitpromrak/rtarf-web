import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-commander-page',
  templateUrl: './commander-page.component.html',
  styleUrls: ['./commander-page.component.scss']
})
export class CommanderPageComponent { 
  constructor(private activeRoute: ActivatedRoute, public ApiService:ApiService) { 
    
  }
}
