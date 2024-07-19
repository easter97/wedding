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
  "https://i.pinimg.com/564x/6d/c2/64/6dc264af09bddb53c629fef88f8e1c4f.jpg",
  "https://i.pinimg.com/736x/ec/c1/b9/ecc1b97e36755276fa36527caba91169.jpg",
  "https://i.pinimg.com/564x/57/ac/0c/57ac0c539e20eb946ea1b1912891f40a.jpg",
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
