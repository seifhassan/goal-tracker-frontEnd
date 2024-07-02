import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  standalone: true,
})
export class DropdownComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
