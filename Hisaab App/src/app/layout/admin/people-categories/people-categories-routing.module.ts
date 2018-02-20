import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleCategoriesComponent } from './people-categories.component';

const routes: Routes = [
    { path: '', component: PeopleCategoriesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PeopleCategoriesRoutingModule { }
