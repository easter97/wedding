import { Component, Inject } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wedding';
  // showRsvp=false;
  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    public router: Router
  ) {}

  displayRsvp(){
    // console.log('display')
    // this.showRsvp=true;
    // setTimeout(()=>{
        this.pageScrollService.scroll({
        document: this.document,
        scrollTarget: '#rsvp',
      });
    // })
    
  }
}
