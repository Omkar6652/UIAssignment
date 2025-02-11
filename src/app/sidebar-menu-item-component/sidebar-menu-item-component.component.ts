import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu-item-component',
  imports: [RouterModule,CommonModule],
  templateUrl: './sidebar-menu-item-component.component.html',
  styleUrl: './sidebar-menu-item-component.component.scss'
})
export class SidebarMenuItemComponentComponent {
  @Input() title: string = '';
  @Input() iconClass: string = '';
  @Input() isActive: boolean = false;
  @Input() isDark: boolean = false;
}
