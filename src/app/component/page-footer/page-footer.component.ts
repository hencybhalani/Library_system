import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-page-footer',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './page-footer.component.html',
  styleUrl: './page-footer.component.css'
})
export class PageFooterComponent {

}
