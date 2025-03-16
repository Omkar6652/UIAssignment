// src/app/components/dashboard/dashboard.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryCardComponent } from '../summary-card/summary-card.component';
import { ProfileItemComponent } from '../profile-item/profile-item.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { ContactSectionComponent } from '../contact-section/contact-section.component';
import { ResourceSectionComponent } from '../resource-section/resource-section.component';
import { SummaryCard, TotalSummary, User } from '../Models/dataModels';

@Component({
  selector: 'app-dashboard',
  imports: [ CommonModule,
    FormsModule,
    SummaryCardComponent,
    ProfileItemComponent,
    DropdownModule,
    ButtonModule,
    TooltipModule,
    InputTextModule,
    ContactSectionComponent,
    ResourceSectionComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit {
  summaryCards: SummaryCard[] = [];
  topUsers: User[] = [];
  topViolators: User[] = [];
  overallSummary: TotalSummary[] = [];
  dateRange: Date[] | undefined;

  timeOptions = [
    { label: 'This Month', value: 'month' },
    { label: 'This Year', value: 'year' },
    { label: 'Last Quarter', value: 'quarter' }
  ];

  selectedTimeFrame = this.timeOptions[0];
  selectedTimeFrameViolators = this.timeOptions[1];
  selectedTimeFrameSummary = this.timeOptions[1];

  constructor() {
    this.dateRange = undefined;
  }

  ngOnInit() {
    this.initSummaryCards();
    this.initTopUsers();
    this.initTopViolators();
    this.initOverallSummary();
  }

  initSummaryCards() {
    this.summaryCards = [
      {
        title: 'Pending reimbursement',
        count: 75,
        icon: 'pi pi-wallet',
        color: '#FFB200',
        percentage: 15.5,
        trend: 'down',
        days: 30,
        link: '/reimbursement',
        linkText: 'View All Request'
      },
      {
        title: 'Approved reimbursement',
        count: 478,
        icon: 'pi pi-check-circle',
        color: '#00C853',
        percentage: 10.8,
        trend: 'up',
        days: 30,
        link: '/reimbursement',
        linkText: 'Track All Reimbursement'
      },
      {
        title: 'Advances request',
        count: 62,
        icon: 'pi pi-money-bill',
        color: '#FF5252',
        percentage: 7.5,
        trend: 'down',
        days: 30,
        link: '/advances',
        linkText: 'View All Request'
      }
    ];
  }

  initTopUsers() {
    this.topUsers = [
      {
        id: '1',
        name: 'Karan Kapoor',
        position: 'Product Manager',
        avatar: 'https://via.placeholder.com/40',
        expenses: 14,
        amount: 90122
      },
      {
        id: '2',
        name: 'Rajan Chandrasekhar',
        position: 'Project Manager',
        avatar: 'https://via.placeholder.com/40',
        expenses: 9,
        amount: 88922
      },
      {
        id: '3',
        name: 'Avinash Mehta',
        position: 'Marketing Coordinator',
        avatar: 'https://via.placeholder.com/40',
        expenses: 11,
        amount: 72673
      },
      {
        id: '4',
        name: 'Aarav Saxena',
        position: 'UX/UI Designer',
        avatar: 'https://via.placeholder.com/40',
        expenses: 7,
        amount: 62370
      },
      {
        id: '5',
        name: 'Samresh Nanda',
        position: 'Senior Developer',
        avatar: 'https://via.placeholder.com/40',
        expenses: 8,
        amount: 58812
      }
    ];
  }

  initTopViolators() {
    this.topViolators = [
      {
        id: '1',
        name: 'Rohit Sharma',
        position: 'Project Manager',
        avatar: 'https://via.placeholder.com/40',
        expenses: 13,
        amount: 27437
      },
      {
        id: '2',
        name: 'Bhargavi Mehta',
        position: 'President of Sales',
        avatar: 'https://via.placeholder.com/40',
        expenses: 8,
        amount: 4956
      },
      {
        id: '3',
        name: 'Divya Shah',
        position: 'Product Marketer',
        avatar: 'https://via.placeholder.com/40',
        expenses: 7,
        amount: 3470
      },
      {
        id: '4',
        name: 'Krutideeban Rajwar',
        position: 'Project Manager',
        avatar: 'https://via.placeholder.com/40',
        expenses: 5,
        amount: 2083
      }
    ];
  }

  initOverallSummary() {
    this.overallSummary = [
      {
        title: 'Total Expenses',
        amount: 6532308,
        icon: 'pi pi-wallet',
        color: '#FF9800',
        tooltip: 'Sum of all expenses across the organization'
      },
      {
        title: 'Total Advances',
        amount: 1236980,
        icon: 'pi pi-money-bill',
        color: '#F44336',
        tooltip: 'Sum of all advance payments'
      },
      {
        title: 'Total Reimbursements',
        amount: 2325310,
        icon: 'pi pi-check-circle',
        color: '#4CAF50',
        tooltip: 'Sum of all reimbursed expenses'
      }
    ];
  }
}