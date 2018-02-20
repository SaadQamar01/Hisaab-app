import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
@Component({
    selector: 'app-employee-query',
    templateUrl: './employee-query.component.html',
    styleUrls: ['./employee-query.component.scss'],
    animations: [routerTransition()]
})
export class EmployeeQueryComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
