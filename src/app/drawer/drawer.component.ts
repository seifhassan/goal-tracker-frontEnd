import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  standalone: true,
})
export class DrawerComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
