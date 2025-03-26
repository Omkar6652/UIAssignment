import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { NotificationItem } from '../Models/HeaderModels';

@Component({
  selector: 'app-notification-panel',
  standalone: true,
  imports: [CommonModule, TabViewModule],
  template: `
    <div class="notification-panel surface-card p-3 border-round-lg shadow-2" (click)="$event.stopPropagation()">
      <p-tabView>
        <p-tabPanel header="Notifications">
          <ng-container *ngTemplateOutlet="notificationList; context: { items: notifications }">
          </ng-container>
        </p-tabPanel>
        <p-tabPanel header="Announcements">
          <ng-container *ngTemplateOutlet="notificationList; context: { items: announcements }">
          </ng-container>
        </p-tabPanel>
      </p-tabView>
    </div>

    <ng-template #notificationList let-items="items">
      <div class="notifications-list">
        @for (item of items; track item.id) {
          <div class="notification-item p-3 border-bottom-1 surface-border" 
               [class.unread]="!item.isRead">
            <div class="font-medium">{{ item.title }}</div>
            <div class="text-500">{{ item.message }}</div>
            <div class="text-sm text-500 mt-2">{{ item.time }}</div>
          </div>
        }
      </div>
    </ng-template>
  `,
  styles: [`
    .notification-panel {
      position: absolute;
      top: 100%;
      right: 0;
      width: 380px;
      max-height: 500px;
      overflow-y: auto;
      z-index: 1000;
      background: var(--surface-card) !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
    }
    .notification-item.unread {
      background-color: var(--surface-hover);
    }
  `]
})
export class NotificationPanelComponent {
  notifications: NotificationItem[] = [
    {
      id: '1',
      title: 'New Reimbursement Request',
      message: 'John Doe submitted a new reimbursement request',
      time: '2 minutes ago',
      isRead: false,
      type: 'notification'
    }
  ];

  announcements: NotificationItem[] = [
    {
      id: '1',
      title: 'System Maintenance',
      message: 'Scheduled maintenance this weekend',
      time: '1 hour ago',
      isRead: true,
      type: 'announcement'
    }
  ];
}
