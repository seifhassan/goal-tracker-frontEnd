import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  standalone: true,
})
export class TabsComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
