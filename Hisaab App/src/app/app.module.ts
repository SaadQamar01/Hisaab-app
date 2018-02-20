import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './provider/auth.service';
import { ViewSchoolService } from './provider/viewSchool/viewSchool.service';
import { EmployeeDetailService } from './provider/employeeDetail/employeeDetail.service';
import { AttendanceService } from './provider/attendance/attendance.service';
import { FeesService } from './provider/fees/fees.service';
import { SalaryService } from './provider/salary/salary.service';
import { MyDatePickerModule } from 'mydatepicker';
import { PagerService } from './provider/pager/index';
import { PeopleCategoryService } from './provider/peopleCategory/peopleCategory.service';
import { PeopleService } from './provider/people/people.service';
import { ProjectService } from './provider/project/project.service';
import { AccountService } from './provider/account/account.service';

// AoT requires an exported function for factories
// export function HttpLoaderFactory(http: Http) {
//     // for development
//     return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
// }
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        // Http,
        HttpModule,
        AppRoutingModule,
        ReactiveFormsModule,
        // TranslateModule.forRoot({
        //     loader: {
        //         provide: TranslateLoader,
        //         useFactory: HttpLoaderFactory,
        //         deps: [Http]
        //     }
        // })
    ],
    providers: [AuthService,AuthGuard,PagerService,ViewSchoolService,EmployeeDetailService,
        PeopleCategoryService,PeopleService,ProjectService,AccountService,
        AttendanceService,FeesService,SalaryService],
    bootstrap: [AppComponent],

})
export class AppModule {
}
