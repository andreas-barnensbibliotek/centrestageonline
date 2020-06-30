import { WpApiService } from './../../../services/wp-Api/wp-api.service';
import { Global } from './../../models/global';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent implements OnInit {

  pagedata:any = [];

  constructor(private route:ActivatedRoute,private wpApi:WpApiService, public _global:Global) {     
      // this.settings.loader= true;  
      _global.isUserRegistred();
      
  }

  ngOnInit(){
    this.route.paramMap.subscribe( prams =>{
        let pageslug = prams.get("slug");
        // pageslug="start"
        this.handlelocalstorage(pageslug);       
    })
    
  }
  ngOnDestroy(){
    // this.settings.loader= true;
  }
  
  handlelocalstorage(pageslug){
    if (!localStorage.getItem(pageslug)) {        
      this.wpApi.getPageSlug(pageslug).subscribe(Response =>{
        this.pagedata =Response;        
        localStorage.setItem(pageslug, JSON.stringify(Response));
        
        return true;
      });
    }else{
      let testobj= JSON.parse(localStorage.getItem(pageslug))
      this.pagedata =testobj      
    };
  }
}
