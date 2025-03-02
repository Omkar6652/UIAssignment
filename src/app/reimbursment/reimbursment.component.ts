import { PageHeaderComponent } from '../page-title/page-title.component';
import { MatIconModule } from '@angular/material/icon';


import { Component, OnInit, ViewChild } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';

export interface Reimbursement {
  title: string;
  date: string;
  category: string;
  username: string;
  department: string;
  lastUpdate: string;
  status: string;
  amount: string;
}
@Component({
  selector: 'app-reimbursment',
  imports: [  CommonModule,TableModule],
  templateUrl: './reimbursment.component.html',
  styleUrls: ['./reimbursment.component.scss']
})

export class ReimbursmentComponent implements OnInit {
  reimbursements: Reimbursement[] = [];
  selectedTab: string = 'All';
  tabs: string[] = ['All', 'Awaiting Reimbursement', 'Reimbursed'];

 

  constructor() {}
    loadReimbursements() {
      this.reimbursements = [
        {
          title: 'Indoor game with trekival team',
          date: '12/01/2020',
          category: 'Games',
          username: 'Sara Padoley',
          department: 'Administration',
          lastUpdate: '21/01/2020',
          status: 'Screening',
          amount: '₹ 1,389'
        },
        {
          title: 'Client meeting at Ashoka Hotel',
          date: '17/01/2020',
          category: 'Hotel',
          username: 'Ramesh Sharma',
          department: 'Product',
          lastUpdate: '21/01/2020',
          status: 'Rejected',
          amount: '₹ 10,922'
        },
        {
          title: 'Office snacks for the team',
          date: '15/01/2020',
          category: 'Entertainment',
          username: 'Krishna Kumar',
          department: 'Management',
          lastUpdate: '21/01/2020',
          status: 'Screening',
          amount: '₹ 1,396'
        },
        {
          title: 'Business meeting at my office',
          date: '01/04/2020',
          category: 'General',
          username: 'Amritha Kapoor',
          department: 'Marketing',
          lastUpdate: '01/01/2020',
          status: 'Approved',
          amount: '₹ 12,579'
        },
        {
          title: 'Business Lunch with a client',
          date: '12/01/2020',
          category: 'Food',
          username: 'Priyanka Jaiswal',
          department: 'Sales',
          lastUpdate: '02/01/2020',
          status: 'Archived',
          amount: '₹ 7,743'
        },
        {
          title: 'Conference seminar',
          date: '21/01/2020',
          category: 'Current Events',
          username: 'Sanjay Jha',
          department: 'Product',
          lastUpdate: 'Z1/01/2020',
          status: 'Screening',
          amount: '₹ 10,836'
        },
        {
          title: 'Trip to Mumbai for business conference',
          date: '15/01/2020',
          category: 'Travel',
          username: 'Rajat Ojha',
          department: 'Finance',
          lastUpdate: '21/01/2020',
          status: 'Paid',
          amount: '₹ 42,970'
        },
        {
          title: 'Getting purchase for upcoming event',
          date: '05/01/2020',
          category: 'Festival',
          username: 'Anuja Mishra',
          department: 'Customer Success',
          lastUpdate: '01/01/2020',
          status: 'Paid',
          amount: '₹ 476'
        },
        {
          title: 'Purchase of sports equipment for team members',
          date: '31/01/2020',
          category: 'Sports',
          username: 'Needa Gandhi',
          department: 'Support',
          lastUpdate: '21/01/2020',
          status: 'Approved',
          amount: '₹ 19,220'
        },
        {
          title: 'Business Lunch with a client',
          date: '14/01/2020',
          category: 'Food',
          username: 'Raghu Neela',
          department: 'Management',
          lastUpdate: '21/01/2020',
          status: 'Archived',
          amount: '₹ 2,084'
        },
        {
          title: 'OYO subscription',
          date: '11/01/2020',
          category: 'Fitness',
          username: 'Sharmilla Shirodkar',
          department: 'Administration',
          lastUpdate: '21/01/2020',
          status: 'Screening',
          amount: '₹ 11,022'
        },
        {
          title: 'Electricity bill for July month',
          date: '24/03/2020',
          category: 'Electricity',
          username: 'Arjun Sharma',
          department: 'Human Resources',
          lastUpdate: '01/01/2020',
          status: 'Rejected',
          amount: '₹ 72,873'
        },
        {
          title: 'Business Lunch with a client',
          date: '20/04/2020',
          category: 'Food',
          username: 'Aninditha Anand',
          department: 'Customer Success',
          lastUpdate: '21/01/2020',
          status: 'Rejected',
          amount: '₹ 27,837'
        },
        {
          title: 'WordPress subscription',
          date: '21/01/2020',
          category: 'WordPress',
          username: 'Prajesh Yadav',
          department: 'Administration',
          lastUpdate: '01/01/2020',
          status: 'Approved',
          amount: '₹ 18,487'
        },
        {
          title: 'Trip to Chennai for Business conference',
          date: '13/03/2020',
          category: 'TSM',
          username: 'Pranabita Jaishar',
          department: 'Engineering',
          lastUpdate: '01/01/2020',
          status: 'Archived',
          amount: '₹ 8,470'
        }
      ];
    }

  ngOnInit(): void {
    this.loadReimbursements();
  }

  ngAfterViewInit() {
  
  }

  
  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  getStatusClass(status: string): string {
    switch(status.toLowerCase()) {
      case 'approved': return 'status-approved';
      case 'rejected': return 'status-rejected';
      case 'screening': return 'status-screening';
      case 'archived': return 'status-archived';
      case 'paid': return 'status-paid';
      default: return '';
    }
  }
}










