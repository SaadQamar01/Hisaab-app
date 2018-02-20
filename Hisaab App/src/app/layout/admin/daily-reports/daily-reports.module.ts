import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyReportsRoutingModule } from './daily-reports-routing.module';
import { DailyReportsComponent } from './daily-reports.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    DailyReportsRoutingModule,
    PageHeaderModule,FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DailyReportsComponent]
})
export class DailyReportsModule { }
