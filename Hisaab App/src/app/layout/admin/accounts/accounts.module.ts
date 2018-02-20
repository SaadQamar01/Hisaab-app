import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { PageHeaderModule,SharedPipesModule } from './../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AccountsRoutingModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    PageHeaderModule,
    FormsModule,
    SharedPipesModule
  ],
  declarations: [AccountsComponent]
})
export class AccountsModule { }
