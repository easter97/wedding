import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.scss']
})
export class OurStoryComponent implements OnInit {
  private observer: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2,) {}

  ngOnInit() {
    // this.setupIntersectionObserver();
  }
  ngAfterViewInit(){
    console.log(this.el.nativeElement)
    this.setupIntersectionObserver();

  }

  private setupIntersectionObserver() {
    // const moonElement = this.el.nativeElement.querySelector('.container');
    let observeElement;

    // else{
      observeElement = this.el.nativeElement.querySelector('.title');
    // }
    let options = {
      threshold: 1
    };
    // if(window.matchMedia("(max-width: 768px)").matches){
    //   options = {
    //     threshold: 0.55
    //   };
    // }

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
    this.observer.observe(observeElement);
  }

  private handleIntersection(target: Element) {
    const moon = this.el.nativeElement.querySelector('.eclipse');
    moon.classList.remove('animate-moon-out')
    moon.classList.add('animate-moon');
    const container = this.el.nativeElement.querySelector('.container');
    
    setTimeout(()=>{
      this.renderer.addClass(container, 'animate-in');
      this.renderer.removeClass(container, 'animate-out');
    },1000)
  }

  private handleIntersectionExit(target: Element) {
    // Element is no longer intersecting (exited viewport)
    const moon = this.el.nativeElement.querySelector('.eclipse');
    moon.classList.remove('animate-moon');
    moon.classList.add('animate-moon-out')
    const container = this.el.nativeElement.querySelector('.container');
    this.renderer.addClass(container, 'animate-out');
    this.renderer.removeClass(container, 'animate-in');
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
