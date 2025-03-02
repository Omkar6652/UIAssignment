// src/app/models/expense.model.ts
export interface Expense {
    id: string;
    amount: number;
    category: string;
    date: Date;
    status: 'pending' | 'approved' | 'rejected';
    userId: string;
  }
  
  // src/app/models/user.model.ts
  export interface User {
    id: string;
    name: string;
    avatar: string;
    position: string;
    department?: string;
    expenses: number;
    amount: number;
  }
  
  // src/app/models/summary.model.ts
  export interface SummaryCard {
    title: string;
    count: number;
    icon: string;
    color: string;
    percentage?: number;
    days?: number;
    trend?: 'up' | 'down' | 'neutral';
    link?: string;
    linkText?: string;
  }
  
  export interface TotalSummary {
    title: string;
    amount: number;
    icon: string;
    color: string;
    tooltip?: string;
  }