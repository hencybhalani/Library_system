import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PageSideNavComponent } from '../page-side-nav/page-side-nav.component';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SharedModule,RouterModule,PageSideNavComponent,PageHeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
