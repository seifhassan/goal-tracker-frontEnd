import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  standalone: true,
})
export class AccordionComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
