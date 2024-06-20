import { APP_ID, Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../../_service/UserService';
import { ToastrService } from 'ngx-toastr';

export interface NavigationItem {
  value:string;
  link:string;
  icon: string;
}
@Component({
  selector: 'app-page-side-nav',
  standalone: true,
  imports: [SharedModule,CommonModule,MatIconModule],
  templateUrl: './page-side-nav.component.html',
  styleUrl: './page-side-nav.component.css'
})
export class PageSideNavComponent {
panelName:string = 'Student Panel';
navItems : NavigationItem[]=[];

constructor(private service:UserService,private toaster:ToastrService,private router:Router){
  this.navItems =[
    { value: 'View Books',link:'view-books', icon:'book'},
    { value: 'My Orders',link:'My-Orders', icon:'shopping_cart'},
  ];

    service.userStatus.subscribe({
      next:(status)=>{
        console.log(status);
        if(status == 'loggedIn'){
            router.navigateByUrl('/dashboard');
            console.log(service);
        }else{

        }
      }
    })
}

}
