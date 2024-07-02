import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  standalone: true,
})
export class ModalComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
