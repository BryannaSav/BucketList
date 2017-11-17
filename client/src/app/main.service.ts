import { Injectable } from '@angular/core';
import {Http} from "@angular/http"
import { User } from "./user"

@Injectable()
export class MainService {

  constructor(private _http:Http) { }

  login(user, callback){
    this._http.post("/login", user).subscribe(
      response=>{
        callback(response.json());
      },
      error=>{console.log(error)}
    )
  };

  checklogin(callback){
    this._http.get('/checklogin').subscribe(
      response=>{
        callback(response.json());
      },
      error=>{console.log(error)}
    )
  };

  getdb(callback){
    this._http.get('/getdb').subscribe(
      response=>{
        callback(response.json());
      },
      error=>{console.log(error)}
    )
  };

  create_item(item){
    this._http.post("/item/create", item).subscribe(
      error=>{console.log(error)}
    )
  };

  getUser(name, callback){
    this._http.post("/get/user", name).subscribe(
      response=>{
        callback(response.json())
      },
      error=>{console.log(error)}
    )
  };


}
