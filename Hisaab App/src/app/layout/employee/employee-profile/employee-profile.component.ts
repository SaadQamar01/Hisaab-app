import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
@Component({
    selector: 'app-employee-profile',
    templateUrl: './employee-profile.component.html',
    styleUrls: ['./employee-profile.component.scss'],
    animations: [routerTransition()]
})
export class EmployeeProfileComponent implements OnInit {
    schoolID; email; employeeID; salary; fatherName; registrationDate; studentFees; employeeName;
    constructor() {
        var schoolDetail = localStorage.getItem('currentUser');
        var schoolDetailParse = JSON.parse(schoolDetail);
        this.fatherName = schoolDetailParse.fatherName;
        this.employeeName = schoolDetailParse.employeeName;
        this.schoolID = schoolDetailParse.schoolID;
        this.email = schoolDetailParse.email;
        this.employeeID = schoolDetailParse.employeeID;
        this.salary = schoolDetailParse.salary;
        this.registrationDate = schoolDetailParse.registrationDate;
    }

    ngOnInit() {
    }
}
