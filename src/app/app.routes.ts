import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', loadComponent() {
      return import('./home/home.component').then(m => m.HomeComponent);
    },
  },
  {
    path: 'events', loadComponent() {
      return import('./events/events.component').then(m => m.EventsComponent);
    },
  },
  {
    path: 'accordion', loadComponent() {
      return import('./accordion/accordion.component').then(m => m.AccordionComponent);
    },
  },
  {
    path: 'carousel', loadComponent() {
      return import('./carousel/carousel.component').then(m => m.CarouselComponent);
    },
  },
  {
    path: 'modal', loadComponent() {
      return import('./modal/modal.component').then(m => m.ModalComponent);
    },
  },
  {
    path: 'collapse', loadComponent() {
      return import('./collapse/collapse.component').then(m => m.CollapseComponent);
    },
  },
  {
    path: 'speed-dial', loadComponent() {
      return import('./speed-dial/speed-dial.component').then(m => m.SpeedDialComponent);
    },
  },
  {
    path: 'dismiss', loadComponent() {
      return import('./dismiss/dismiss.component').then(m => m.DismissComponent);
    },
  },
  {
    path: 'drawer', loadComponent() {
      return import('./drawer/drawer.component').then(m => m.DrawerComponent);
    },
  },
  {
    path: 'dropdown', loadComponent() {
      return import('./dropdown/dropdown.component').then(m => m.DropdownComponent);
    },
  },
  {
    path: 'popover', loadComponent() {
      return import('./popover/popover.component').then(m => m.PopoverComponent);
    },
  },
  {
    path: 'tabs', loadComponent() {
      return import('./tabs/tabs.component').then(m => m.TabsComponent);
    },
  },
  {
    path: 'tooltip', loadComponent() {
      return import('./tooltip/tooltip.component').then(m => m.TooltipComponent);
    },
  },
  {
    path: 'datepicker', loadComponent() {
      return import('./datepicker/datepicker.component').then(m => m.DatepickerComponent);
    },
  }
];
