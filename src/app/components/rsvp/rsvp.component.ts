import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import 'add-to-calendar-button';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss'],
})
export class RsvpComponent {

  
  @ViewChild('myIframe') iframe: ElementRef;
  isThankYouPresent: boolean = false;
  constructor() { }

  ngAfterViewInit(){
    window.addEventListener('message', (event)=> {
      if (event.data === 'thankWrapperPresent' && !this.isThankYouPresent) {
          console.log('The #thankWrapper element is present in the iframe.');
          // Add your code to handle the event here
          this.isThankYouPresent = true;
      }
  });
  }


}
