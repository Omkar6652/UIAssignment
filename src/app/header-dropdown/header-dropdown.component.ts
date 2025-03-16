import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMenuItem } from '../Models/HeaderModels';
import { SvgElementDirective } from '../directives/svg-element.directive';

@Component({
  selector: 'app-header-dropdown',
  standalone: true,
  imports: [CommonModule, SvgElementDirective],
  template: `
    <div class="dropdown-menu surface-card p-2 border-round-lg shadow-2">
      @for (item of menuItems; track item.label) {
        <div class="dropdown-item p-2 hover:surface-hover border-round cursor-pointer"
             (click)="item.action()">
          <div class="icon-wrapper" libSvgElement [appSvg]="item.icon" [svgSize]="'20'" [fill-color]="'#475569'"></div>
          <span class="ml-2">{{ item.label }}</span>
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
      background: #ffffff !important;
      border: 1px solid var(--surface-border);
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      border-radius: 6px;
    }
    .dropdown-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }
    :host ::ng-deep svg {
      width: 20px;
      height: 20px;
    }
  `]
})
export class HeaderDropdownComponent {
  @Input() menuItems: AddMenuItem[] = [];
}
