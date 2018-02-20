import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './../provider/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    type = "superAdmin";
    data: {};
    constructor(public fb: FormBuilder, public router: Router, private authService: AuthService) {
        this.createForm();
        // this.router.navigate(['dashboard']);
    }
    ngOnInit() {

    }

    createForm() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.minLength(6)]],
            password: ['', Validators.required],
        })
    }
    onLoggedin() {
        this.data = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password,
        }
        this.authService.logIn(this.data)
            .map(
            data => { console.log(data); return data },
            err => { console.log(err); return err }
            ).subscribe(
            data => {
                console.log(data)
                if (data.status) {
                    this.router.navigate(['dashboard']);
                    localStorage.setItem('currentUser', JSON.stringify(data.data));
                    localStorage.setItem('isLoggedin', 'true');
                    alert(data.message)
                } else {
                    alert(data.message)
                }
            });
    }
}
