import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { User } from "./../user";
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: Array<object>
  curuser: User;
  item: {title:string, description:string, check:boolean}
  friend: string;
  test:string;


  constructor(private _mainService:MainService, private _router:Router) {
    this.users=[{}];
    this.curuser = new User;
    this.item={title:"", description:"", check:false}
    this.friend= ""
   }

  ngOnInit() {
    this._mainService.checklogin((data)=>{
      if(data===false){
        this._router.navigate(['/'])
      }
    }),

    this._mainService.getdb((dbinfo)=>{
      this.curuser=dbinfo.curuser;
      this.users=dbinfo.users;
      console.log(this.curuser)
    })
  }

  create_item(){
    this._mainService.create_item((this.item))
  }

  update(){
    console.log("feature under construction")
  }

}
