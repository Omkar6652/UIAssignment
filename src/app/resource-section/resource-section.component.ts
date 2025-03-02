import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resource-section',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterLink],
  templateUrl: './resource-section.component.html',
  styleUrls: ['./resource-section.component.scss']
})
export class ResourceSectionComponent {}