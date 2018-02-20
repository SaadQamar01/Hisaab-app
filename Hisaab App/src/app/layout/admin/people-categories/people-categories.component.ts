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
import { PagerService } from './../../../provider/pager/index';

@Component({
    selector: 'app-people-categories',
    templateUrl: './people-categories.component.html',
    styleUrls: ['./people-categories.component.scss'],
    animations: [routerTransition(), expandCollapse(), formToggle()]
})
export class PeopleCategoriesComponent implements OnInit {
    selectedCategory: string = '';
    categoryName: string = '';
    categories = [];
    searchText = '';
    openCloseAnim = '';
    formTogglebtn = '';
    toggleSign = '';
    categoryId;
    editData = false;
    pager: any = {};
    pagedItems: any[];
    public myForm: FormGroup;
    constructor(private formBuilder: FormBuilder, private peopleCategoryService: PeopleCategoryService,private pagerService: PagerService) {
        this.getCategory();
        this.openCloseAnim = 'open';
        this.formTogglebtn = 'open';
        this.toggleSign = '-';
    }
    openReportsFilter(): void {
        this.openCloseAnim = (this.openCloseAnim == 'open') ? 'close' : 'open';
        this.toggleSign = (this.toggleSign == '-') ? '+' : '-';

    }
    // formToggleFunc(): void {
    //     this.formTogglebtn = (this.formTogglebtn == 'open') ? 'close' : 'open';
    // }
    getCategory() {
        this.peopleCategoryService.getCategory()
            .subscribe(
            data => {
                this.categories = data.results;
                this.setPage(1);
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }
    ngOnInit() {
        this.myForm = this.formBuilder.group({
            categoryName: [null, Validators.required],
            // other controls are here...
        });
    }

    //event handler for the select element's change event
    selectChangeHandler(event: any) {
        //update the ui
        this.selectedCategory = event.target.value;
        console.log(this.selectedCategory)
    }


    deleteCategory(category_id) {
        this.peopleCategoryService.deleteCategory(category_id)
            .subscribe(
            data => {
                this.getCategory();
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }

    editCategory(category) {
        this.categoryId=category.category_id;
        this.categoryName = category.name;
        this.selectedCategory = category.parent_id;
        this.editData = true;
    }


    submit() {
        if (this.editData) {
            data = {
                category_id:this.categoryId,
                name: this.categoryName,
                parent_id: this.selectedCategory
            }
            this.peopleCategoryService.editCategory(data)
                .subscribe(
                data => {
                    this.getCategory();
                    this.editData=false;
                    this.categoryName='';
                },
                err => { alert("Something Went Wrong"); console.log(err) }
                );
        }
        else {
            var data = {};
            if (this.selectedCategory === '0' || this.selectedCategory === '') {
                data = {
                    name: this.categoryName,
                    parent_id: 0
                }
            } else {
                data = {
                    name: this.categoryName,
                    parent_id: this.selectedCategory
                }
            }
            this.peopleCategoryService.addCategory(data)
                .subscribe(
                data => {
                    this.getCategory();
                    this.categoryName='';
                },
                err => { alert("Something Went Wrong"); console.log(err) }
                );
        }

    }
    getNRecords(event: any) {
        //update the ui
       console.log(event.target.value)
       var n=event.target.value;
       this.peopleCategoryService.getNRecords(n)
            .subscribe(
            data => {
                this.categories = data.results;
                this.setPage(1);
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.categories.length, page);

        // get current page of items
        this.pagedItems = this.categories.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}
