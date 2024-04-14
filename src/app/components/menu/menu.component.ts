import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  activeSection='home'
  // Scroll event listener to update active section based on scroll position
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateActiveSection();
  }

  // Method to update active section based on scroll position
  updateActiveSection() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Check which section is currently in view based on scroll position
    if (this.isElementInViewport(document.getElementById('home'))) {
      this.activeSection = 'home';
    } else if (this.isElementInViewport(document.getElementById('eclipse'))) {
      this.activeSection = 'proposal';
    }
    else{
      this.activeSection='';
    }
    // Add more conditions for other sections as needed
  }

  // Method to scroll to a specific section
  scrollTo(sectionId: string) {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Helper method to check if an element is in the viewport
  isElementInViewport(element: Element) {
    if (!element) {
      return false;
    }
    const rect = element.getBoundingClientRect();
    let center = rect.top + rect.height / 2;
    return (

      center<= (window.innerHeight || document.documentElement.clientHeight) && center >=0

    );
  }


}
