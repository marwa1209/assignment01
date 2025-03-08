import { Component } from '@angular/core';
import { TimelineItemModel } from 'src/app/shared/interfaces/timeline-item-model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  timelineItems: TimelineItemModel[] = [
    {
      title: 'Full Stack Developer',
      duration: '2017-2018',
      description:
        'Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.',
      icon: 'fa-solid fa-pencil',
      badgeClass: 'blue',
    },
    {
      title: 'Front End Developer at Google Company',
      duration: '2017-2018',
      description:
        'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
      icon: 'fa-solid fa-pencil',
      badgeClass: 'danger',
    },
    {
      title: 'System Analyst',
      duration: '2017-2018',
      description:
        'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
      icon: 'fa-solid fa-pencil',
      badgeClass: 'warning',
    }
  ];
}
