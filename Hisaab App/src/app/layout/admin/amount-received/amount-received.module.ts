import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AmountReceivedRoutingModule } from './amount-received-routing.module';
import { AmountReceivedComponent } from './amount-received.component';
import { PageHeaderModule } from './../../../shared';

@NgModule({
    imports: [
        CommonModule,
        AmountReceivedRoutingModule,
        PageHeaderModule,
        FormsModule,ReactiveFormsModule
    ],
    declarations: [AmountReceivedComponent]
})
export class AmountReceivedModule { }
