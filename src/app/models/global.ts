import { Router } from '@angular/router';

// import { LocalStorageHandler } from './localstorageHandler';
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class Global {
  private _liveserver:string = "https://centrestageonline.org";
  private _devserver:string = "http://localhost:81/centrestageonline.org";
  private _wpApi:string = "/wpAdmin/wp-json/wp/v2/";      
  
  // storageHandler:LocalStorageHandler
  currentlanguage:string 

  server:string = this._devserver + this._wpApi;    
  devkey:string = "/devkey/alf/?type=json";     
   
  constructor(private router: Router ) {  
    this.currentlanguage = localStorage.getItem("userlang");    
  }

  public getUserGuidLanguage() {
    return [
      { id: 1, name: 'English', type: "EN" },
      { id: 2, name: 'Swedish', type: "SE" },
      { id: 3, name: 'Spainish', type: "SP" },
      { id: 4, name: 'Polish', type: "PL" },
      { id: 5, name: 'France', type: "FR"  },
      { id: 6, name: 'German', type: "DE" }
    ];
  }
  public getUserLanguage(){
    return this.currentlanguage;
    
  }

  public setUserLanguage(langId:number){      
    if(!langId){
      langId=1;
    };
    let usrlang = this.getUserGuidLanguage().find(i => i.id === langId);             
    return this.setLanguage(usrlang.type)
  }
  
  private setLanguage(lang){                       
    localStorage.setItem("userlang",lang);  
    this.currentlanguage = localStorage.getItem("userlang")
    return this.currentlanguage
 }

  public changeSwedish(inputValue:string){
    return inputValue
      .replace(/å/g, String.fromCharCode(229))
      .replace(/Å/g, String.fromCharCode(196))
      .replace(/ä/g, String.fromCharCode(228))
      .replace(/Ä/g, String.fromCharCode(197))
      .replace(/ö/g, String.fromCharCode(246))
      .replace(/Ö/g, String.fromCharCode(214));
  }

      
  public isUserRegistred(){   
    
    console.log("registered: " +localStorage.getItem("userlang"));
    if(this.currentlanguage){
      return true;        
    }else{
      this.RedirectNotRegisterd();
      return false;
    }

  }
    
  RedirectNotRegisterd(){
    this.router.navigate(['/register']);
  }

  public isEmptyObj = (obj) => {
    return obj === null || undefined
        ? true
        : (() => {
                for (const prop in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                        return false;
                    }
                }
                return true;
            })();
    };
}