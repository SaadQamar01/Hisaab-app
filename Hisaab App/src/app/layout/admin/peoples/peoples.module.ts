import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeoplesRoutingModule } from './peoples-routing.module';
import { PeoplesComponent } from './peoples.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { PageHeaderModule,SharedPipesModule } from './../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PeoplesRoutingModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    PageHeaderModule,
    FormsModule,
    SharedPipesModule
  ],
  declarations: [PeoplesComponent]
})
export class PeoplesModule { }
