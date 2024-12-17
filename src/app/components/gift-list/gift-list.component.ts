import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-gift-list',
  standalone: true,
  imports: [],
  templateUrl: './gift-list.component.html',
  styleUrl: './gift-list.component.scss'
})
export class GiftListComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = '//www.myregistry.com//Visitors/GiftList/iFrames/EmbedRegistry.ashx?r=61rFarnGb6bxjAq6K9wMVw2&v=2';
    script.id = 'script_myregistry_giftlist_iframe';
    this.renderer.appendChild(this.el.nativeElement, script);
  }
}
