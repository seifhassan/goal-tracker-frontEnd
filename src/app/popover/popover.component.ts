import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  standalone: true,
})
export class PopoverComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
