import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Expense, User } from '../Models/dataModels';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  // Mock data - in a real app, this would come from an API
  private mockExpenses: Expense[] = [
    {
      id: '1',
      amount: 1250,
      category: 'Travel',
      date: new Date('2025-02-15'),
      status: 'pending',
      userId: '1'
    },
    {
      id: '2',
      amount: 750,
      category: 'Meals',
      date: new Date('2025-02-10'),
      status: 'approved',
      userId: '2'
    },
    // Add more mock data as needed
  ];

  private mockUsers: User[] = [
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
    // Add more mock users as needed
  ];

  getExpenses(): Observable<Expense[]> {
    return of(this.mockExpenses);
  }

  getTopUsers(limit: number = 5): Observable<User[]> {
    const sortedUsers = [...this.mockUsers].sort((a, b) => b.amount - a.amount);
    return of(sortedUsers.slice(0, limit));
  }

  getExpensesByStatus(status: string): Observable<Expense[]> {
    return of(this.mockExpenses.filter(exp => exp.status === status));
  }

  getExpenseStats() {
    return of({
      pending: this.mockExpenses.filter(exp => exp.status === 'pending').length,
      approved: this.mockExpenses.filter(exp => exp.status === 'approved').length,
      total: this.mockExpenses.reduce((acc, curr) => acc + curr.amount, 0)
    });
  }
}