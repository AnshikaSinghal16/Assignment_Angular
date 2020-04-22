import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment2Component } from './containers/assignment2.component';
import { AssignmentModule } from '../assignment.module';

@NgModule({
  declarations: [
    Assignment2Component
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    Assignment2Component
  ]
})
export class Assignment2Module {

}
