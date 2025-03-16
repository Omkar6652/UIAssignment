import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { UserProfileData, UserProfileMenuItem } from '../Models/HeaderModels';

@Component({
  selector: 'app-user-profile-dropdown',
  standalone: true,
  imports: [CommonModule, RouterModule, TieredMenuModule],
  template: `
    <div class="profile-dropdown p-3 border-round-lg shadow-2">
      <div class="user-info mb-3">
        <div class="flex align-items-center gap-2">
          <img [src]="userData.avatar" class="profile-avatar" [alt]="userData.name">
          <div>
            <div class="font-medium">{{userData.name}}</div>
            <div class="text-sm text-500">{{userData.email}}</div>
          </div>
        </div>
      </div>
      
      @for (item of menuItems; track item.label) {
        @if (item.divider) {
          <div class="surface-border border-top-1 my-2"></div>
        } @else {
          <div 
            class="menu-item p-2 hover:surface-hover border-round cursor-pointer flex align-items-center gap-2"
            (click)="item.action && item.action()">
            <i [class]="item.icon"></i>
            <span>{{ item.label }}</span>
          </div>
        }
      }
    </div>
  `,
  styles: [`
    .profile-dropdown {
      position: absolute;
      top: calc(100% + 0.5rem);
      right: 0;
      min-width: 250px;
      z-index: 1000;
      background: #ffffff;
      border: 1px solid #dee2e6;
      border-radius: 6px;
      box-shadow: 0 2px 4px rgba(0,0,0,.1) !important;
    }
    .profile-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .menu-item {
      color: var(--text-color);
      transition: background-color 0.2s;
      
      &:hover {
        background-color: var(--surface-hover);
      }
      
      i {
        color: var(--primary-color);
        width: 1.2rem;
        text-align: center;
        margin-right: 0.5rem;
      }
    }
  `]
})
export class UserProfileDropdownComponent {
  @Input() userData!: UserProfileData;
  @Input() menuItems: UserProfileMenuItem[] = [];
}
