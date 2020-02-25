import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';

import { routes } from './core-routing';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [FirstpageComponent, SecondpageComponent],
  declarations: [FirstpageComponent, SecondpageComponent]
})
export class CoreModule { }
