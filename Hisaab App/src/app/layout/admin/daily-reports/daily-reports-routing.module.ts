import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyReportsComponent } from './daily-reports.component';

const routes: Routes = [
    { path: '', component: DailyReportsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DailyReportsRoutingModule { }
