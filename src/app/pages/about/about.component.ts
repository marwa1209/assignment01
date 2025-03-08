import { Component } from '@angular/core';
import { ServiceModel } from 'src/app/shared/interfaces/service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  services:ServiceModel[] = [
    {
      name: 'Graphic Design',
      icon: 'fa-regular fa-lightbulb',
      color: 'color-1',
    },
    { name: 'Web Design', icon: 'fa-solid fa-earth-africa', color: 'color-2' },
    { name: 'Software', icon: 'fa-solid fa-database', color: 'color-3' },
    {
      name: 'Application',
      icon: 'fa-solid fa-mobile-screen-button',
      color: 'color-4',
    },
  ];
}
