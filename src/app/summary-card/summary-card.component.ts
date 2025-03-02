// src/app/components/summary-card/summary-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TagModule } from 'primeng/tag';
import { RouterLink } from '@angular/router';
import { SummaryCard } from '../Models/dataModels';

@Component({
  selector: 'app-summary-card',
  standalone: true,
  imports: [CommonModule, ButtonModule, TooltipModule, TagModule, RouterLink],
  template: `
    <div class="summary-card p-3 border-round-lg surface-card">
      <div class="flex justify-content-between align-items-center mb-3">
        <span class="text-sm text-500">{{ data.title }}</span>
        <span 
          class="summary-icon flex align-items-center justify-content-center border-circle"
        >
          <i [class]="data.icon"></i>
        </span>
      </div>

      <div class="text-4xl font-bold mb-3">{{ data.count }}</div>

      <div class="flex justify-content-between align-items-center">
        <a *ngIf="data.link" [routerLink]="data.link" class="text-primary text-sm no-underline">
          {{ data.linkText }}
        </a>

        <div *ngIf="data.percentage !== undefined" class="flex align-items-center">
          <i 
            [class]="data.trend === 'up' ? 'pi pi-arrow-up text-green-500' : (data.trend === 'down' ? 'pi pi-arrow-down text-red-500' : 'pi pi-minus text-blue-500')"
            class="mr-1"
          ></i>
          <span [class]="data.trend === 'up' ? 'text-green-500' : (data.trend === 'down' ? 'text-red-500' : 'text-blue-500')" class="text-sm">
            {{ data.percentage }}% in last {{ data.days }} days
          </span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
  `]
})
export class SummaryCardComponent {
  @Input() data!: SummaryCard;
}