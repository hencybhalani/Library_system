import { Routes,RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './auth/register/register.component';
import { ConfirmotpComponent } from './auth/confirmotp/confirmotp.component';
import { LayoutComponent } from './component/layout/layout.component';


export const routes: Routes = [
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'',
        component:PagenotfoundComponent
    },
    {
        path:'confirmotp',
        component:ConfirmotpComponent
    },
    {
        path:'dashboard',
        component:LayoutComponent,
       

    }
    
    
    


];

