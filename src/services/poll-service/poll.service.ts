import { Global } from './../../app/models/global';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from './../api-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PollService extends ApiServiceService {
  private apiCall:string = "/Api_v3.1/pollmod/typ/";

  constructor(http:HttpClient, private _global:Global) {
    super("",http);
   }

  getPollbyModuleId(modid:any) {
    console.log("getPollbyModuleId kommer hit");
      let apiurl:string = this._global.server + this.apiCall + "pollbymodid/val/" + modid + "/txtval/0"+ this._global.devkey;
      return this.getPosts(apiurl);
  }

  postAddPoll(MainObj:any){
    let url:string = this._global.server + this.apiCall + "pollAdd"+ this._global.devkey;
    return this.doPost(url,MainObj);
  }
  postEditPoll(MainObj:any){
    let url:string = this._global.server + this.apiCall + "pollEdit"+ this._global.devkey;
    return this.doPost(url,MainObj);
  }
  postDelPoll(MainObj:any){
    let url:string = this._global.server + this.apiCall + "pollDel"+ this._global.devkey;
    return this.doPost(url,MainObj);
  }

  postAddPollAlt(altobj:any){
    let url:string = this._global.server + this.apiCall + "altAdd/val/0/txtval/0"+ this._global.devkey;
    return this.doPost(url,altobj);
  }
  postEditPollAlt(modid:any){
    let url:string = this._global.server + this.apiCall + "pollbymodid/val/" + modid + "/txtval/0"+ this._global.devkey;
    return this.doPost(url,modid);
  }  
  postDelPollAlt(altobj:any){
    let url:string = this._global.server + this.apiCall + "altdel/val/0/txtval/0"+ this._global.devkey;
    return this.doPost(url,altobj);
  }

  postUpdateAltValues(MainObj:any){
    let url:string = this._global.server + this.apiCall + "altupd"+ this._global.devkey;
    return this.doPost(url, MainObj);
  }

}
