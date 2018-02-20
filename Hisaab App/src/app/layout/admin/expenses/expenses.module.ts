import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';
import { PageHeaderModule } from './../../../shared';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ExpensesRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ExpensesComponent]
})
export class ExpensesModule { }
