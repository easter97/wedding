import { Component, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-eclipse',
  templateUrl: './eclipse.component.html',
  styleUrls: ['./eclipse.component.scss']
})
export class EclipseComponent implements OnInit {
  private observer: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const moonElement = this.el.nativeElement.querySelector('.moon');

    const options = {
      threshold: 0.5
    };

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.handleIntersection(entry.target);
        } else {
          this.handleIntersectionExit(entry.target);
        }
      });
    };

    this.observer = new IntersectionObserver(callback, options);
    this.observer.observe(moonElement);
  }

  private handleIntersection(target: Element) {
    target.classList.add('animate-moon');
  }

  private handleIntersectionExit(target: Element) {
    // Element is no longer intersecting (exited viewport)
    target.classList.remove('animate-moon');
    this.resetIntersectionObserver();
  }

  private resetIntersectionObserver() {
    
    if (this.observer) {
      this.observer.disconnect(); // Disconnect the current observer
      this.observer = null; // Reset the observer instance

      // Re-initialize the Intersection Observer for potential re-observation
      this.setupIntersectionObserver();
    }
  }
  

}
