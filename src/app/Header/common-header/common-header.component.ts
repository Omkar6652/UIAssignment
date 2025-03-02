import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SvgElementDirective } from '../../directives/svg-element.directive';

@Component({
  selector: 'app-common-header',
  imports: [ButtonModule, SvgElementDirective],
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss']
})
export class CommonHeaderComponent {
  name: string = "Mayank";
}
