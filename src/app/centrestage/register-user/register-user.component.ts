
import { Component, OnInit } from '@angular/core';
import { Global } from '../../models/global';
import { of } from 'rxjs';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  dropdownListLanguage = [];
  selectedItemsLanguage = [];
  dropdownListLanguageSettings = {};
  languageList = null;
  focus;
  focus1;
  focus0;
  focus2;
  UserRegisterForm;
  

  constructor( public _global:Global) {  
    
    this.languageList= this._global.getUserGuidLanguage();
    of(this._global.getUserGuidLanguage()).subscribe(lang => {
      this.languageList = lang;      
    });   
  }

  ngOnInit(): void {
    
  }

  // getUserGuidLanguage() {
  //   return [
  //     { id: '1', name: 'order 1' },
  //     { id: '2', name: 'order 2' },
  //     { id: '3', name: 'order 3' },
  //     { id: '4', name: 'order 4' }
  //   ];
  // }
  skicka(f){ // använd detta när man skall skicka formuläret, f = formulärobjektet
    console.log("Gender: " +f.value.inputGender);
    console.log("Language " + f.value.language)
    console.log("inputBefattning: " +f.value.inputBefattning);
    let postdata {
      la

    }  
      
   
  }


  // onSubmit(customerData) {
  //   // Process checkout data here
  //   console.log( this.UserRegisterForm);
    
  //   console.warn('Your order has been submitted', customerData);
  // }
}
