import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-speed-dial',
  templateUrl: './speed-dial.component.html',
  standalone: true,
})
export class SpeedDialComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
