import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent {
  tabs = [
    {
      title: 'Graphic Design',
      isActive: true,
    },
    {
      title: 'Apps',
      isActive: false,
    },
    {
      title: 'Software',
      isActive: false,
    },
  ];
  images=[
    {
      imgSrc:'assets/images/works/img-1.webp',
    },
    {
      imgSrc:'assets/images/works/img-2.webp',
    },
    {
      imgSrc:'assets/images/works/img-3.webp',
    },
    {
      imgSrc:'assets/images/works/img-4.webp',
    },
    {
      imgSrc:'assets/images/works/img-5.webp',
    },
    {
      imgSrc:'assets/images/works/img-6.webp',
    },
  ]
  setActiveTab(index: number) {
    this.tabs.forEach((tab, i) => (tab.isActive = i === index));
  }
}
