import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectDetailsRoutingModule } from './project-details-routing.module';
import { ProjectDetailsComponent } from './project-details.component';
import { ReactiveFormsModule  } from '@angular/forms';
// import {DatePickerModule} from 'angular-io-datepicker';
// import { OverlayModule } from "angular-io-overlay";
// import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { MyDatePickerModule } from 'mydatepicker';
import { PageHeaderModule } from './../../../shared';
@NgModule({
  imports: [
    CommonModule,
    ProjectDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // OverlayModule,
    // DatePickerModule,
    MyDatePickerModule,
    PageHeaderModule
  ],
  declarations: [ProjectDetailsComponent]
})
export class ProjectDetailsModule { }
