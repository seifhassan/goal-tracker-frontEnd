import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  standalone: true,
})
export class CollapseComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
