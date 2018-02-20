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
import { PeopleCategoryService } from './../../../provider/peopleCategory/peopleCategory.service';
import { PeopleService } from './../../../provider/people/people.service';
import { PagerService } from './../../../provider/pager/index';

@Component({
    selector: 'app-peoples',
    templateUrl: './peoples.component.html',
    styleUrls: ['./peoples.component.scss'],
    animations: [routerTransition(), expandCollapse(), formToggle()]
})
export class PeoplesComponent implements OnInit {
    selectedCategory: string = '';
    peopleName: string = '';
    peopleNameInUrdu: string = '';
    peopleContact: string = '';
    allData = [];
    categories=[];
    searchText = '';
    openCloseAnim = '';
    formTogglebtn = '';
    toggleSign = '';
    people_id;
    editData = false;
    pager: any = {};
    pagedItems: any[];
    public myForm: FormGroup;
    constructor(private formBuilder: FormBuilder, private peopleService: PeopleService,  private peopleCategoryService: PeopleCategoryService,private pagerService: PagerService) {
        this.getData();
        this.openCloseAnim = 'open';
        this.formTogglebtn = 'open';
        this.toggleSign = '-';
        this.peopleCategoryService.getCategory()
        .subscribe(
        data => {
            this.categories = data.results;
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
        this.peopleService.getDetails()
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
            peopleName: [null, Validators.required],
            peopleContact: [null, Validators.required],
            peopleNameInUrdu: [null, Validators.required],
            // other controls are here...
        });
    }

    //event handler for the select element's change event
    selectChangeHandler(event: any) {
        //update the ui
        this.selectedCategory = event.target.value;
        console.log(this.selectedCategory)
    }


    deleteDetails(people_id) {
        this.peopleService.deleteDetails(people_id)
            .subscribe(
            data => {
                this.getData();
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }

    editDetails(details) {
        this.people_id=details.people_id;
        this.selectedCategory = this.selectedCategory;
        this.peopleName = details.people_name;
        this.peopleNameInUrdu = details.people_nameinurdu;
        this.peopleContact=details.contact;
        this.editData = true;
    }
    submit() {
        if (this.editData) {
            data = {
                people_id:this.people_id,
                people_name: this.peopleName,
                people_nameinurdu: this.peopleNameInUrdu,
                people_catid: this.selectedCategory,
                contact:this.peopleContact
            }
            this.peopleService.editDetails(data)
                .subscribe(
                data => {
                    this.getData();
                    this.editData=false;
                    this.peopleName='';
                    this.peopleContact='';
                    this.peopleNameInUrdu='';
                },
                err => { alert("Something Went Wrong"); console.log(err) }
            );
        }
        else {
            var data = {};
            if (this.selectedCategory === '0' || this.selectedCategory === '') {
                alert("Please select category");

            } else {
                data = {
                    people_name: this.peopleName,
                    people_nameinurdu: this.peopleNameInUrdu,
                    contact:this.peopleContact,
                    people_catid: this.selectedCategory
                }
                this.peopleService.addPeople(data)
                .subscribe(
                data => {
                    this.getData();
                    this.peopleContact='';
                    this.peopleName='';
                    this.peopleNameInUrdu='';
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
       this.peopleService.getNRecords(n)
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
