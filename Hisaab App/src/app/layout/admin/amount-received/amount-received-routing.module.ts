import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmountReceivedComponent } from './amount-received.component';

const routes: Routes = [
    { path: '', component: AmountReceivedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmountReceivedRoutingModule { }
