import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class Global {
  private _liveserver:string = "https://centrestageonline.org";
  private _devserver:string = "http://localhost:81/centrestageonline.org";
  private _wpApi:string = "/wpAdmin/wp-json/wp/v2/";      
    
  server:string = this._devserver + this._wpApi;    
  devkey:string = "/devkey/alf/?type=json";     
   
    constructor() {       
    }

    public getUserGuidLanguage() {
      return [
        { id: '1', name: 'English', type: "EN" },
        { id: '2', name: 'Swedish', type: "SE" },
        { id: '3', name: 'Spainish', type: "SP" },
        { id: '4', name: 'Polish', type: "PL" },
        { id: '5', name: 'France', type: "FR"  },
        { id: '6', name: 'German', type: "DE" }
      ];
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
  
}