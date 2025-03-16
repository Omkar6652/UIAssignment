import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HeaderDropdownComponent } from '../../header-dropdown/header-dropdown.component';
import { NotificationPanelComponent } from '../../notification-panel/notification-panel.component';
import { AddMenuItem } from '../../Models/HeaderModels';

@Component({
  selector: 'app-common-header',
  standalone: true,
  imports: [CommonModule, ButtonModule, HeaderDropdownComponent, NotificationPanelComponent],
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss']
})
export class CommonHeaderComponent {
  name: string = "Mayank";
  showAddMenu = false;
  showNotifications = false;

  addMenuItems: AddMenuItem[] = [
    {
      label: 'New Reimbursement',
      icon: 'pi pi-file',
      action: () => { console.log('New Reimbursement'); }
    },
    {
      label: 'New Advance Request',
      icon: 'pi pi-money-bill',
      action: () => { console.log('New Advance'); }
    }
  ];

  toggleAddMenu(event: Event): void {
    event.stopPropagation();
    this.showAddMenu = !this.showAddMenu;
    this.showNotifications = false;
  }

  toggleNotifications(event: Event): void {
    event.stopPropagation();
    this.showNotifications = !this.showNotifications;
    this.showAddMenu = false;
  }
}
