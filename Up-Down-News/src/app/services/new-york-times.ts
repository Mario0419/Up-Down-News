
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http/src/headers';
import { parseString } from 'xml2js';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewYorkTimesService {

    rssHtml: string = 'http://rss.nytimes.com/services/xml/rss/nyt/';
    rssHtml2: string = 'http://mx3.io:3004/retrieve/newyorktimes/';
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

    retrieveNews(category: string): Observable<string> {
        var headers = new Headers();
        headers.append('Accept', 'application/xml');
        let url = this.rssHtml2;
        return this.http.get(url + category , {
            responseType: 'text',
            headers: {
                'Accept': 'application/xml'
            }
        });
    }
}
