import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [CommonModule,MaterialModule,RouterModule],
  exports: [MaterialModule,CommonModule,RouterModule]

})
export class SharedModule { }
