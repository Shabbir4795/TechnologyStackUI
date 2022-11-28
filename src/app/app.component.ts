import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { TechnologyCategoryResponse } from './Models/TechnologyCategoryResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  techStackArray: TechnologyCategoryResponse[] | any = [];
  url:string = "http://localhost:81/TechnologyCategory";

  constructor(private http: HttpClient) { }
  
  async ngOnInit() {
    this.techStackArray.push(await this.getTechStack());
    console.log(this.techStackArray);
  }

  async getTechStack() {
    return await lastValueFrom(this.http.get<TechnologyCategoryResponse>(this.url)) ;
  }



  


}
