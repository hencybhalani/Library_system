import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './component/page-header/page-header.component';
import { PageFooterComponent } from './component/page-footer/page-footer.component';
import { PageSideNavComponent } from './component/page-side-nav/page-side-nav.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './auth/register/register.component';
import { ConfirmotpComponent } from './auth/confirmotp/confirmotp.component';
import { LayoutComponent } from './component/layout/layout.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule ,RouterModule, SharedModule,PageHeaderComponent,PageFooterComponent,PageSideNavComponent,PagenotfoundComponent,RegisterComponent,ConfirmotpComponent,LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Authapp';
}





