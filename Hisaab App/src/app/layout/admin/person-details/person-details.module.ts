import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonDetailsRoutingModule } from './person-details-routing.module';
import { PersonDetailsComponent } from './person-details.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    PersonDetailsRoutingModule,
    PageHeaderModule,ReactiveFormsModule,
    FormsModule
  ],
  declarations: [PersonDetailsComponent]
})
export class PersonDetailsModule { }
