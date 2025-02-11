import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SidebarComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
onThemeToggle($event: string) {
throw new Error('Method not implemented.');
}
  title = 'UIAssignment';
isDarkMode: boolean =false;
}
