
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http/src/headers';

@Injectable()
export class NewYorkTimesService {

    rssHtml: string = 'http://rss.nytimes.com/services/xml/rss/nyt/';

    categories: string[] = [
        'Sports',
        'CollegeFootball',
        'Baseball',
        'CollegeBasketball',
        'Golf',
        'Hockey',
        'ProBasketball',
        'ProFootball',
        'Soccer',
        'Tennis',
        'Americas',
    ]

    constructor(private http: HttpClient) {

    }

    retrieveNews(category: string) {
        let url = this.rssHtml + category + ".xml";
        this.http.get(url , {
            responseType: 'text'
        }).subscribe(
            res => {
                console.log(res);
            }
        );
    }
}