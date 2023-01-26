import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface NewsApiResonse {
  articles: Article[];
  totalResults: number;
}

export interface Article {
  title: string;
  url: string;
}


@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  private apiKey = 'a8a1a59c088b4eaeb5b095d90b073358';
  // private country = 'tw';
  private baseUrl = 'https://newsapi.org/v2/top-headlines';

  constructor(private http: HttpClient) {}

  getTopHeadlines(page: number, pageSize: number, country: string) {
    const url = 
      `${this.baseUrl}?country=${country}&page=${page}&pageSize=${pageSize}&apiKey=${this.apiKey}`;
    
    return this.http.get<NewsApiResonse>(url);
  }
}
