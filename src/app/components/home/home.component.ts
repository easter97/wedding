import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() showRsvp = new EventEmitter<any>();
  @Output() showHome = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  displayRsvp(){
    this.showRsvp.emit();
  }

  displayHome(){
    this.showHome.emit();
  }

}
