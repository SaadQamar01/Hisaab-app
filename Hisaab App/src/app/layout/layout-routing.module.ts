import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'school-registration', loadChildren: './super-admin/school-registration/school-registration.module#SchoolRegistrationModule' },
            { path: 'view-school', loadChildren: './super-admin/view-school/view-school.module#ViewSchoolModule' },
            { path: 'amount-received', loadChildren: './admin/amount-received/amount-received.module#AmountReceivedModule' },
            { path: 'daily-reports', loadChildren: './admin/daily-reports/daily-reports.module#DailyReportsModule' },
            { path: 'expenses', loadChildren: './admin/expenses/expenses.module#ExpensesModule' },
            { path: 'person-details', loadChildren: './admin/person-details/person-details.module#PersonDetailsModule' },
            { path: 'project-details', loadChildren: './admin/project-details/project-details.module#ProjectDetailsModule' },
            { path: 'attendance-record', loadChildren: './admin/attendance-record/attendance-record.module#AttendanceRecordModule' },
            { path: 'people-categories', loadChildren: './admin/people-categories/people-categories.module#PeopleCategoriesModule' },
            { path: 'peoples', loadChildren: './admin/peoples/peoples.module#PeoplesModule' },
            { path: 'projects', loadChildren: './admin/projects/projects.module#ProjectsModule' },
            { path: 'accounts', loadChildren: './admin/accounts/accounts.module#AccountsModule' },
            { path: 'employee-attendence', loadChildren: './employee/employee-attendence/employee-attendence.module#EmployeeAttendenceModule' },
            { path: 'employee-profile', loadChildren: './employee/employee-profile/employee-profile.module#EmployeeProfileModule' },
            { path: 'emp-receipt-voucher', loadChildren: './employee/emp-receipt-voucher/emp-receipt-voucher.module#EmpReceiptVoucherModule' },
            { path: 'employee-query', loadChildren: './employee/employee-query/employee-query.module#EmployeeQueryModule' },
            { path: 'student-profile', loadChildren: './student/student-profile/student-profile.module#StudentProfileModule' },
            { path: 'student-fee', loadChildren: './student/student-fee/student-fee.module#StudentFeeModule' },
            { path: 'student-receipt-voucher', loadChildren: './student/student-receipt-voucher/student-receipt-voucher.module#StudentReceiptVoucherModule' },
            { path: 'student-query', loadChildren: './student/student-query/student-query.module#StudentQueryModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
