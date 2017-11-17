import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';
import { User } from "./../user"
import {Router} from '@angular/router';

@Component({
  selector: 'app-showone',
  templateUrl: './showone.component.html',
  styleUrls: ['./showone.component.css']
})
export class ShowoneComponent implements OnInit {
  user:User;
  item:{name:string}

  constructor(private _mainService:MainService, private _route: ActivatedRoute, private _router:Router ) { 
    this.user=new User;
    this.item={name:""}

    this._route.paramMap.subscribe( params => {
      this.item={name:(params.get('name'))};
      
    this._mainService.getUser(this.item, (user)=>{
      this.user=user;
    })
    })
  }

  ngOnInit() {
    this._mainService.checklogin((data)=>{
      if(data===false){
        this._router.navigate(['/'])
      }
    })
  }



}
