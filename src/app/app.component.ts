import { Component, OnInit, Input } from '@angular/core';
import { NewsParserService } from './news-parser.service';

interface Country {
  name: String;
  iso: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  category: String
  country: String
  query: String
  categories: String[] = [
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology'
  ]
  countries: Country[] = [
    {
      name: 'Украина',
      iso: 'ua'
    },
    {
      name: 'Россия',
      iso: 'ru'
    },
    {
      name: 'США',
      iso: 'us'
    },
    {
      name: 'Япония',
      iso: 'jp'
    }
  ];
  news: [];
  title = 'newsapi';

  constructor(private newsParserService: NewsParserService) { }

  ngOnInit() {
    this.country = this.countries[0].iso;
    this.getNews()
  }
  getNews() {
    this.newsParserService.getNews(this.country, this.category).subscribe((response) => {
      this.news = response['articles']
    })
  }

}
