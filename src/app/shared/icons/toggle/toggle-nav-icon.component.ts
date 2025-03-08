import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-nav-icon',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="1.5rem"
    height="1.5rem"
  >
    <path
      stroke="rgba(33, 37, 41, 0.75)"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="2"
      d="M4 7h22M4 15h22M4 23h22"
    />
  </svg>`,
})
export class ToggleIconComponent {}
