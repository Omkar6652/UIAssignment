import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvgElementDirective } from '../directives/svg-element.directive';

@Component({
  selector: 'app-sidebar-menu-item-component',
  imports: [RouterModule,CommonModule,SvgElementDirective],
  templateUrl: './sidebar-menu-item-component.component.html',
  styleUrls: ['./sidebar-menu-item-component.component.scss']
})
export class SidebarMenuItemComponentComponent {
  @Input() title: string = '';
  @Input() iconClass: string = '';
  @Input() isActive: boolean = false;
  @Input() isDark: boolean = false;
  @Input() svgColor:string ='';
}
