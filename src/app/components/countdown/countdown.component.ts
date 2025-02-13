import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent {

  date: any;
  now: any;
  targetDate: any = new Date(Date.UTC(2025, 9, 11, 22, 0, 0));
  
  targetTime: any = this.targetDate.getTime();
  difference: number;
  months: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  currentTime: any = `${
    this.months[this.targetDate.getMonth()]
  } ${this.targetDate.getDate()}, ${this.targetDate.getFullYear()}`;

  @ViewChild('days', { static: true }) days: ElementRef;
  @ViewChild('hours', { static: true }) hours: ElementRef;
  @ViewChild('minutes', { static: true }) minutes: ElementRef;
  // @ViewChild('seconds', { static: true }) seconds: ElementRef;

  ngAfterViewInit() {
    setInterval(() => {
      this.tickTock(); // Call tickTock to update time calculations
    }, 1000);
  }
  

  tickTock() {
    const now = new Date().getTime();
    const difference = this.targetDate.getTime() - now; // Difference in milliseconds
  
    if (difference <= 0) {
      // If countdown is over, set all to 0
      this.days.nativeElement.innerText = 0;
      this.hours.nativeElement.innerText = 0;
      this.minutes.nativeElement.innerText = 0;
      return;
    }
  
    // Calculate days, hours, and minutes from the difference
    const totalSeconds = Math.floor(difference / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const days = Math.floor(totalHours / 24);
  
    const hours = totalHours % 24; // Remaining hours after removing full days
    const minutes = totalMinutes % 60; // Remaining minutes after removing full hours
  
    // Update UI
    this.days.nativeElement.innerText = days;
    this.hours.nativeElement.innerText = hours;
    this.minutes.nativeElement.innerText = minutes;
  }
  

}
