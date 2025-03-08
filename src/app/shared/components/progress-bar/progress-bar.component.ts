import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent {
  @Input() title: string = '';
  @Input() color: string = 'bg-custom-1';
  @Input() textColor: string = 'text-custom-1';
  @Input() percentage: number = 0;
}
