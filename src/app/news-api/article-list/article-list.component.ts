import { Component, Input } from '@angular/core';
import { NewsApiService, NewsApiResonse, Article } from '../news-api.service';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent {
  @Input() country!: string

  articles: Article[] = [];
  currentPage = 1;
  pageSize = 10;
  totalPages!: number;

  constructor(private newsApi: NewsApiService) {
  }

  ngOnInit(){
    console.log('this.country :>> ', this.country);
    this.getTopHeadlines();
  }

  getTopHeadlines() {
    this.newsApi
      .getTopHeadlines(this.currentPage, this.pageSize, this.country)
      .subscribe((data: NewsApiResonse) => {
        // console.log('data :>> ', data);
        this.articles = data.articles;
        this.totalPages = Math.ceil(data.totalResults / this.pageSize);
      });
  }

  gotoPage(page: number) {
    this.currentPage = page;
    this.getTopHeadlines();
  }
}
