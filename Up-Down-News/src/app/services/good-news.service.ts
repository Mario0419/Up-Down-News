import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class GoodNewsService(){
  constructor(){

  }

  rssHtml: string = 'https://www.goodnewsnetwork.org/category/';

  categories: string[] = {
    'news-health/feed/',
    'gnn-your-blogs/feed/',
    'news-business/feed/',
    'news-world/feed/',
    'news-earth/feed/',
    'news-science/feed/',
    'culture=sports/feed/',
    'culture-celebrities/feed/',
    'gnn-uplift,uplift-good-ideas,uplift-good-laugh,uplift-heroes,uplift-inspiring,uplift-kids,uplift-pets,uplift-top-videos/feed/'





  }


  retrieveGoodNews(){

  }

}
