import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsParserService {
  API_KEY = '17bf41f732c340a29aeefe0cdebc1300';

  constructor(private httpClient: HttpClient) { 
  }
  public getNews(country:String, category:String){
    category = (category) ? '&category='+category : ''
    country = (country) ? '&country='+country : '&country=ua'
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?apiKey=${this.API_KEY}${country}${category}`);
  }
}
