import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleCategoriesRoutingModule } from './people-categories-routing.module';
import { PeopleCategoriesComponent } from './people-categories.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { PageHeaderModule, SharedPipesModule } from './../../../shared';

@NgModule({
  imports: [
    CommonModule,
    PeopleCategoriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    PageHeaderModule,
    SharedPipesModule
  ],
  declarations: [PeopleCategoriesComponent ]
})
export class PeopleCategoriesModule { }
