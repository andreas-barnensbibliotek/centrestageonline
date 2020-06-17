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
  languageList = [];
  focus;
  focus1;
  focus0;
  focus2;

  constructor( public _global:Global) { 
    this.languageList= this._global.getUserGuidLanguage();
    of(this._global.getUserGuidLanguage()).subscribe(lang => {
      this.languageList = lang;
      console.log("test: " + lang);
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

}
