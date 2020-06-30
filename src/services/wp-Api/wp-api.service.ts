import { Global } from './../../app/models/global';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from './../api-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WpApiService extends ApiServiceService {

//translate kod:  https://medium.com/@ivywalobwa/use-google-translation-api-in-your-angular-app-d55096bbbe67

  //private server:string ="http://localhost:81/Angular_wp/wpAdmin/wp-json/wp/v2/";
  //private server:string ="http://dev.frontdata.se/lasfirman/wpAdmin/wp-json/wp/v2/";

  constructor(Http:HttpClient, private _global:Global) { 
    super("",Http);
  }

  getMeny(meny:any){
    let url:string = this._global.server +"menu_"+ this._global.getUserLanguage() +"?filter[orderby]=date&order=desc";
    return this.getPosts(url);
  }

  getPageSlug(slug:any){
   
    let url:string = this._global.server +"Content_"+ this._global.getUserLanguage() +"?slug="+slug;
    console.log("getPageSlug URL: " + url);    
    return this.getPosts(url);       

  }

}
