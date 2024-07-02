import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  standalone: true,
})
export class CarouselComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
