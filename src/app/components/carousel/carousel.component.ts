// carousel.component.ts

import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: string[] = ['https://i.pinimg.com/564x/d9/6b/c8/d96bc8b9643f8790f90c810e815241f3.jpg','https://images.squarespace-cdn.com/content/v1/62965e811f7199435ae4367a/1698538903095-QWNMJ4VQJ59H6DCQLDMU/4+tips+on+How+to+Style+an+engagement+session+-+houston+wedding+and+couples+photographer+%288%29.jpg?','https://source.unsplash.com/random/400x400/?couple&1',];
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
