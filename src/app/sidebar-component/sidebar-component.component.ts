import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarMenuItemComponentComponent } from '../sidebar-menu-item-component/sidebar-menu-item-component.component';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../Models/MenuItems';

@Component({
  selector: 'app-sidebar-component',
  imports: [SidebarMenuItemComponentComponent,CommonModule],
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.scss']
})
export class SidebarComponentComponent {
  menuItems: MenuItem[] = [
    { title: 'Dashboard', icon: 'assets/dashboard-fill.svg', isActive: true },
    { title: 'Users', icon: 'assets/user-group.svg', isActive: false },
    { title: 'Reimbursement', icon: 'assets/reimbursement.svg', isActive: false },
    { title: 'Advances', icon: 'assets/wallet.svg', isActive: false },
    { title: 'Reports', icon: 'assets/report.svg', isActive: false },
    { title: 'Analytics', icon: 'assets/analytics.svg', isActive: false },
    { title: 'Settings', icon: 'assets/setting.svg', isActive: false }
  ];
@Output() menuClicked = new EventEmitter<string>();
  setActiveItem(selectedItem: MenuItem): void {
    this.menuItems.forEach(item => {
      item.isActive = item === selectedItem;
    });
    this.menuClicked.emit(selectedItem.title);
  }

  toggleTheme(): void {
    // Implement theme toggle logic here
  }
}
