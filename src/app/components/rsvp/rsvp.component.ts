import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import 'add-to-calendar-button';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss'],
})
export class RsvpComponent {

  
  @ViewChild('myIframe') iframe: ElementRef;

  constructor() { }


}
