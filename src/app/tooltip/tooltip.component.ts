import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  standalone: true,
})
export class TooltipComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
