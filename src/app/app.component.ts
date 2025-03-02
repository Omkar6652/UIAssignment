import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';
import { CommonHeaderComponent } from './Header/common-header/common-header.component';
import { ReimbursmentComponent } from './reimbursment/reimbursment.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SidebarComponentComponent,CommonHeaderComponent,ReimbursmentComponent,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectedItem: string  = "Dashboard";

menuitemClicked(arg0: string) {
  this.selectedItem = arg0;
}
  
onThemeToggle($event: string) {
throw new Error('Method not implemented.');
}
  title = 'UIAssignment';
isDarkMode: boolean =false;
}
