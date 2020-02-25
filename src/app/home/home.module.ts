import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { FourthpageComponent } from './fourthpage/fourthpage.component';

import { routes } from './home-routing';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ThirdpageComponent, FourthpageComponent]
})
export class HomeModule { }
