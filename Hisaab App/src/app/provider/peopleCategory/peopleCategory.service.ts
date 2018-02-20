import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Http, HttpModule } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
// import * as firebase from 'firebase/app';
@Injectable()
export class PeopleCategoryService {
  constructor(private http: Http,
    public router: Router) {
  }
  addCategory(data) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8000/api/add_category',  data, options)
      .map(res => {
        console.log(res.json())
        return res.json()
      })
      .catch((err) => {
        console.log(err.json)
        return err.json()
      })
  }
  getCategory(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:8000/api/get_category',options)
      .map(res => {
        console.log(res.json())
        return res.json()
      })
      .catch((err) => {
        console.log(err.json)
        return err.json()
      })
  }
  deleteCategory(category_id){
    var data={
        category_id:category_id
    }
    console.log(data)
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8000/api/delete_category',data,options)
      .map(res => {
        console.log(res.json())
        return res.json()
      })
      .catch((err) => {
        console.log(err.json)
        return err.json()
      })
  }
  editCategory(data){
    console.log(data)
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8000/api/edit_category',data,options)
      .map(res => {
        console.log(res.json())
        return res.json()
      })
      .catch((err) => {
        console.log(err.json)
        return err.json()
      })
  }
  getNRecords(n){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8000/api/get-n-records',{n},options)
      .map(res => {
        console.log(res.json())
        return res.json()
      })
      .catch((err) => {
        console.log(err.json)
        return err.json()
      })
  }
}
