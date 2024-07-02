import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
})
export class HomeComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
