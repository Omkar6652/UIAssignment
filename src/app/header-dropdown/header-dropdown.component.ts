import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMenuItem } from '../Models/HeaderModels';

@Component({
  selector: 'app-header-dropdown',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dropdown-menu surface-card p-2 border-round-lg shadow-2">
      @for (item of menuItems; track item.label) {
        <div class="dropdown-item p-2 hover:surface-hover border-round cursor-pointer"
             (click)="item.action()">
          <i [class]="item.icon" class="mr-2"></i>
          {{ item.label }}
        </div>
      }
    </div>
  `,
  styles: [`
    .dropdown-menu {
      position: absolute;
      top: 100%;
      right: 0;
      min-width: 200px;
      z-index: 1000;
    }
    .dropdown-item {
      display: flex;
      align-items: center;
    }
  `]
})
export class HeaderDropdownComponent {
  @Input() menuItems: AddMenuItem[] = [];
}
