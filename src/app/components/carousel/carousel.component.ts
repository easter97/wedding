// carousel.component.ts

import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: string[] = [
  "./assets/images/wedding-photos/SP-A&amp_V-NJ-12.jpg",
  "./assets/images/wedding-photos/SP-A&amp_V-NJ-17.jpg",
  "./assets/images/wedding-photos/SP-A&amp_V-NJ-28.jpg",
];
  currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
    // Auto-change slides every 5 seconds
    interval(6000).subscribe(() => {
      this.nextSlide();
    });
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
