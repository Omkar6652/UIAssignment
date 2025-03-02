// src/app/components/profile-item/profile-item.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { User } from '../Models/dataModels';

@Component({
  selector: 'app-profile-item',
  standalone: true,
  imports: [CommonModule, AvatarModule],
  template: `
    <div class="profile-item flex justify-content-between align-items-center p-3 border-bottom-1 surface-border">
      <div class="flex align-items-center">
        <p-avatar 
          [image]="user.avatar" 
          shape="circle" 
          size="large"
          class="avatar"
        ></p-avatar>
        <div>
          <div class="font-medium">{{ user.name }}</div>
          <div class="text-sm text-500">{{ user.position }}</div>
        </div>
      </div>
      <div class="text-right">
        <div class="font-medium">₹ {{ user.amount | number:'1.0-0' }}</div>
        <div class="text-sm text-500">in {{ user.expenses }} Expenses</div>
      </div>
    </div>
  `,
  styles: []
})
export class ProfileItemComponent {
  @Input() user!: User;
}