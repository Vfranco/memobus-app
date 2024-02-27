import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIRouting } from './ui-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(UIRouting)
  ]
})
export class UIModule { }
