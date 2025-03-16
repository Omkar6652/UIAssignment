import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HeaderDropdownComponent } from '../../header-dropdown/header-dropdown.component';
import { NotificationPanelComponent } from '../../notification-panel/notification-panel.component';
import { UserProfileDropdownComponent } from '../../user-profile-dropdown/user-profile-dropdown.component';
import { AddMenuItem, UserProfileData, UserProfileMenuItem } from '../../Models/HeaderModels';

@Component({
  selector: 'app-common-header',
  standalone: true,
  imports: [CommonModule, ButtonModule, HeaderDropdownComponent, NotificationPanelComponent, UserProfileDropdownComponent],
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss']
})
export class CommonHeaderComponent {
  name: string = "Mayank";
  showAddMenu = false;
  showNotifications = false;
  showUserProfile = false;

  userProfileData: UserProfileData = {
    name: 'Mayank',
    email: 'mayank@company.com',
    avatar: 'assets/DummyIcon.svg'
  };

  userProfileMenu: UserProfileMenuItem[] = [
    {
      label: 'My Profile',
      icon: 'pi pi-user',
      action: () => { console.log('My Profile clicked'); }
    },
    {
      label: 'Account Settings',
      icon: 'pi pi-cog',
      action: () => { console.log('Account Settings clicked'); }
    },
    {
      label: 'Help & Support',
      icon: 'pi pi-question-circle',
      action: () => { console.log('Help & Support clicked'); }
    },
    { divider: true } as UserProfileMenuItem,
    {
      label: 'Logout',
      icon: 'pi pi-sign-out',
      action: () => { console.log('Logout clicked'); }
    }
  ];

  addMenuItems: AddMenuItem[] = [
    {
      label: 'User',
      icon: 'assets/Solid/user-add.svg',  // Updated path
      action: () => { console.log('Add User'); }
    },
    {
      label: 'Department',
      icon: 'assets/Solid/building-office.svg',  // Updated path
      action: () => { console.log('Add Department'); }
    },
    {
      label: 'Advance',
      icon: 'assets/Solid/cash-banknote.svg',  // Updated path
      action: () => { console.log('Add Advance'); }
    },
    {
      label: 'Document',
      icon: 'assets/Solid/document-add.svg',  // Updated path
      action: () => { console.log('Add Document'); }
    },
    {
      label: 'Project',
      icon: 'assets/Solid/briefcase.svg',  // Updated path
      action: () => { console.log('Add Project'); }
    }
  ];

  toggleAddMenu(event: Event): void {
    event.stopPropagation();
    this.showAddMenu = !this.showAddMenu;
    this.showNotifications = false;
    this.showUserProfile = false;
  }

  toggleNotifications(event: Event): void {
    event.stopPropagation();
    this.showNotifications = !this.showNotifications;
    this.showAddMenu = false;
    this.showUserProfile = false;
  }

  toggleUserProfile(event: Event): void {
    event.stopPropagation();
    this.showUserProfile = !this.showUserProfile;
    this.showAddMenu = false;
    this.showNotifications = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Close dropdowns when clicking outside
    if (!(event.target as HTMLElement).closest('.user-profile-wrapper')) {
      this.showUserProfile = false;
    }
    if (!(event.target as HTMLElement).closest('.notification')) {
      this.showNotifications = false;
    }
    if (!(event.target as HTMLElement).closest('.quick-add')) {
      this.showAddMenu = false;
    }
  }
}
