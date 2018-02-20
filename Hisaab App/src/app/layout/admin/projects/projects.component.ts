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
import { PeopleService } from './../../../provider/people/people.service';
import { ProjectService } from './../../../provider/project/project.service';
import { PagerService } from './../../../provider/pager/index';
@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    animations: [routerTransition(), expandCollapse(), formToggle()]
})
export class ProjectsComponent implements OnInit {
    selectedPeople: string = '';
    projectName: string = '';
    projectNameInUrdu: string = '';
    peopleContact: string = '';
    allData = [];
    peoples=[];
    searchText = '';
    openCloseAnim = '';
    formTogglebtn = '';
    toggleSign = '';
    project_id;
    editData = false;
    pager: any = {};
    pagedItems: any[];
    public myForm: FormGroup;
    constructor(private formBuilder: FormBuilder, private peopleService: PeopleService,  private projectService: ProjectService,private pagerService: PagerService) {
        this.getData();
        this.openCloseAnim = 'open';
        this.formTogglebtn = 'open';
        this.toggleSign = '-';
        this.peopleService.getDetails()
        .subscribe(
        data => {
            this.peoples = data.results;
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
        this.projectService.getProjectDetails()
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
            projectName: [null, Validators.required],
            projectNameInUrdu: [null, Validators.required],
            // other controls are here...
        });
    }

    //event handler for the select element's change event
    selectChangeHandler(event: any) {
        //update the ui
        this.selectedPeople = event.target.value;
        console.log(this.selectedPeople)
    }


    deleteDetails(project_id) {
        this.projectService.deleteDetails(project_id)
            .subscribe(
            data => {
                this.getData();
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }

    editDetails(details) {
        this.project_id=details.project_id;
        this.selectedPeople = details.people_id;
        this.projectName = details.project_name;
        this.projectNameInUrdu=details.project_nameinurdu;
        this.editData = true;
    }
    submit() {
        if (this.editData) {
            data = {
                project_id:this.project_id,
                project_name: this.projectName,
                project_nameinurdu: this.projectNameInUrdu,
                people_id:this.selectedPeople,
            }
            this.projectService.editDetails(data)
            .subscribe(
                data => {
                    this.getData();
                    this.editData=false;
                    this.projectName='';
                    this.projectNameInUrdu='';
                    alert(data.message);
                },
                err => { alert("Something Went Wrong"); console.log(err) }
                );
        }
        else {
            var data = {};
            if (this.selectedPeople === '0' || this.selectedPeople === '') {
                alert("Please select category");

            } else {
                data = {
                    project_name: this.projectName,
                    people_id:this.selectedPeople,
                    project_nameinurdu:this.projectNameInUrdu,
                }
                this.projectService.addProject(data)
                .subscribe(
                data => {
                    this.getData();
                    this.projectName='';
                    this.projectNameInUrdu='';
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
       this.projectService.getNRecords(n)
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
