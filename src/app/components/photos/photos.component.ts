import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  images = [
    "./assets/images/gallery/AA938A26-6180-44C2-B2FB-F2F174B4768E-15387-00000AFC22EDA464.jpg",
    "./assets/images/gallery/amalfi-1.JPG",
    "./assets/images/gallery/amalfi-2.JPG",
    "./assets/images/gallery/amalfi-3.JPG",
    "./assets/images/gallery/christmas.JPG",
    "./assets/images/gallery/easter.jpg",
    "./assets/images/gallery/engagement-1.jpg",
    "./assets/images/gallery/engagement-2.jpg",
    "./assets/images/gallery/engagement-3.jpg",
    "./assets/images/gallery/engagement-4.jpg",
    "./assets/images/gallery/engagement-5.JPG",
    "./assets/images/gallery/engagement-6.jpg",
    "./assets/images/gallery/engagement-7.jpg",
    "./assets/images/gallery/film.JPG",
    "./assets/images/gallery/halloween.JPEG",
    "./assets/images/gallery/house.JPG",
    "./assets/images/gallery/mexico-1.jpg",
    "./assets/images/gallery/mexico-2.jpg",
    "./assets/images/gallery/nye.jpg",
    "./assets/images/gallery/okc.JPG",
    "./assets/images/gallery/oktoberfest.jpg",
    "./assets/images/gallery/pumpkin.JPG",
    "./assets/images/gallery/rooftop-1.JPG",
    "./assets/images/gallery/rooftop-2.JPG",
    "./assets/images/gallery/rooftop-3.JPG",
    "./assets/images/gallery/switzerland-1.JPG",
    "./assets/images/gallery/switzerland-2.JPG",
    "./assets/images/gallery/switzerland-3.JPG",
    "./assets/images/gallery/switzerland-4.JPG",
    "./assets/images/gallery/tuscany.jpg",
    "./assets/images/gallery/wedding-1.jpg",
    "./assets/images/gallery/wedding-2.jpg",
    ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
