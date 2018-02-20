import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { PageHeaderModule,SharedPipesModule } from './../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    PageHeaderModule,
    FormsModule,
    SharedPipesModule
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }
