import { Component, OnInit, Inject } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  animations: [
    trigger('fade', [
      state('loading', style({ opacity: 1 })),
      state('fade', style({ opacity: 0 })),
      state('done', style({opacity:0, display: 'none'})),
      transition('loading <=> fade', animate('1s ease-in-out')),
      transition('fade <=> done', animate('1s ease-in-out')),
    ]),
  ],
})
export class ContainerComponent {
  status;
  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    public router: Router
  ) {
    this.status='loading';
  }

  ngOnInit(){
    setTimeout(()=>{
      this.status = 'fade';
    }, 1000)
    setTimeout(()=>{
      this.status = 'done';
    }, 2000)
  }

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
