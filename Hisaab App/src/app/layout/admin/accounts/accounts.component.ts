import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { expandCollapse } from '../../../router.animations';
import { formToggle } from '../../../router.animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { AuthService } from './../../../provider/auth.service';
import { AccountService } from './../../../provider/account/account.service';
import { PagerService } from './../../../provider/pager/index';
@Component({
    selector: 'app-projects',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.scss'],
    animations: [routerTransition(), expandCollapse(), formToggle()]
})
export class AccountsComponent implements OnInit {
    selectedaccountid: string = '';
    accountName: string = '';
    accountNameInUrdu: string = '';
    peopleContact: string = '';
    allData = [];
    users=[];
    searchText = '';
    openCloseAnim = '';
    formTogglebtn = '';
    toggleSign = '';
    account_id;
    editData = false;
    pager: any = {};
    pagedItems: any[];
    public myForm: FormGroup;
    constructor(private formBuilder: FormBuilder,  private authService: AuthService,private accountService:AccountService,private pagerService: PagerService) {
        this.getData();
        this.openCloseAnim = 'open';
        this.formTogglebtn = 'open';
        this.toggleSign = '-';
        this.authService.getUsers()
        .subscribe(
        data => {
            this.users = data.results;
        },
        err => { alert("Something Went Wrong"); console.log(err) }
        );
    }
    openReportsFilter(): void {
        this.openCloseAnim = (this.openCloseAnim == 'open') ? 'close' : 'open';
        this.toggleSign = (this.toggleSign == '-') ? '+' : '-';
    }
    // formToggleFunc(): void {
    //     this.formTogglebtn = (this.formTogglebtn == 'open') ? 'close' : 'open';
    // }
    getData() {
        this.accountService.getAccountDetails()
            .subscribe(
            data => {
                this.allData = data.results;
                this.setPage(1);
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }
    ngOnInit() {
        this.myForm = this.formBuilder.group({
            accountName: [null, Validators.required],
            accountNameInUrdu: [null, Validators.required],
            // other controls are here...
        });
    }

    //event handler for the select element's change event
    selectChangeHandler(event: any) {
        //update the ui
        this.selectedaccountid = event.target.value;
        console.log(this.selectedaccountid)
    }


    deleteDetails(account_id) {
        this.accountService.deleteDetails(account_id)
            .subscribe(
            data => {
                this.getData();
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }

    editDetails(details) {
        this.account_id=details.account_id;
        this.selectedaccountid = details.user_id;
        this.accountName = details.account_name;
        this.accountNameInUrdu=details.account_nameinurdu;
        this.editData = true;
    }
    submit() {
        if (this.editData) {
            data = {
                account_id:this.account_id,
                account_name: this.accountName,
                account_nameinurdu: this.accountNameInUrdu,
                user_id:this.selectedaccountid,
            }
            this.accountService.editDetails(data)
            .subscribe(
                data => {
                    this.getData();
                    this.editData=false;
                    this.accountName='';
                    this.accountNameInUrdu='';
                    alert(data.message);
                },
                err => { alert("Something Went Wrong"); console.log(err) }
                );
        }
        else {
            var data = {};
            if (this.selectedaccountid === '0' || this.selectedaccountid === '') {
                alert("Please select category");

            } else {
                data = {
                    account_name: this.accountName,
                    account_nameinurdu:this.accountNameInUrdu,
                    user_id:this.selectedaccountid,
                }
                console.log(data);
                this.accountService.addAccount(data)
                .subscribe(
                data => {
                    this.getData();
                    this.accountName='';
                    this.accountNameInUrdu='';
                    alert(data.message);
                },
                err => { alert("Something Went Wrong"); console.log(err) }
                );
            }
        }

    }
    getNRecords(event: any) {
        //update the ui
       console.log(event.target.value)
       var n=event.target.value;
       this.accountService.getNRecords(n)
            .subscribe(
            data => {
                this.allData = data.results;
                this.setPage(1);
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        console.log(page);
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allData.length, page);

        // get current page of items
        this.pagedItems = this.allData.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}
