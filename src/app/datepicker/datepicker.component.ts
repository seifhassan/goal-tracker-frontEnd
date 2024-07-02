import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  standalone: true,
})
export class DatepickerComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
