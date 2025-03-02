// src/app/components/contact-section/contact-section.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="surface-card p-4 border-round-lg">
      <h2 class="text-xl font-medium mb-4">Contact Us</h2>
      
      <div class="mb-3 flex align-items-center">
        <i class="pi pi-envelope text-primary mr-3"></i>
        <div>
          <div class="text-500 mb-1">Email</div>
          <a href="mailto:help@admin.in" class="text-color no-underline">{{"help@admin.in"}}</a>
        </div>
      </div>
      
      <div class="mb-3 flex align-items-center">
        <i class="pi pi-phone text-primary mr-3"></i>
        <div>
          <div class="text-500 mb-1">Call</div>
          <a href="tel:+919995557777" class="text-color no-underline">+91 9999-555-777</a>
        </div>
      </div>
    </div>
  `,
  styles: [`.contact-section {
    background-color: var(--surface-card);
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    padding: 1.5rem;
    
    .section-title {
      font-size: 1.25rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
    }
    
    .contact-list {
      .contact-item {
        display: flex;
        align-items: center;
        margin-bottom: 1.25rem;
        
        &:last-child {
          margin-bottom: 0;
        }
        
        .contact-icon {
          width: 40px;
          height: 40px;
          background-color: rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          color: var(--primary-color);
        }
        
        .contact-details {
          .contact-label {
            font-size: 0.875rem;
            color: var(--text-color-secondary);
            margin-bottom: 0.25rem;
          }
          
          .contact-value {
            font-weight: 500;
            
            a {
              color: var(--text-color);
              text-decoration: none;
              
              &:hover {
                color: var(--primary-color);
              }
            }
          }
        }
      }
    }
  }
  `]
})
export class ContactSectionComponent {}

