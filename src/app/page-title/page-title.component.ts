import { ButtonModule } from 'primeng/button';
import { SvgElementDirective } from '../directives/svg-element.directive';


import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  imports: [ButtonModule,SvgElementDirective],
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})

export class PageHeaderComponent {
  @Input() title: string = '';
}