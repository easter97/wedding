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
  "./assets/images/gallery/engagement-4.jpg",
  "./assets/images/gallery/engagement-2.jpg",
  "./assets/images/gallery/engagement-3.jpg",
  "./assets/images/gallery/engagement-7.jpg",];
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
