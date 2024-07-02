import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-dismiss',
  templateUrl: './dismiss.component.html',
  standalone: true,
})
export class DismissComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
