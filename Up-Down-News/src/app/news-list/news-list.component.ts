import { Component } from '@angular/core';
import { NewYorkTimesService } from '../services/new-york-times';
import { GoodNewsService } from '../services/good-news.service';
import { parseString } from 'xml2js';
import { Observable } from 'rxjs/Observable';

import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
    selector: 'news-list',
    templateUrl: './news-list.component.html',
    styleUrls: [
        './news-list.component.css'
    ],
    providers: [NewYorkTimesService,GoodNewsService]
})
export class NewsListComponent implements OnInit {

    news: any[] = [{
        title: "any news"
    }];

    constructor(private newyorktimesService: NewYorkTimesService,
    private goodnewsService: GoodNewsService){

    }

    ngOnInit() {
    }


    retrieveNews() {
        var component = this;
        this.newyorktimesService.retrieveNews("ProFootball").subscribe(
            res => {
                // console.log(res);
                parseString(
                    res, function (err, result) {
                        // console.log(result);
                        component.news = result.rss.channel[0].item
                        console.log(result.rss.channel[0].item);
                    }
                )
            }
        );;
    }

    retrieveGoodNews(){
      var component = this;
      this.goodnewsService.retrieveGoodNews("news-health/feed/").subscribe(
        res=>{
          parseString(
                     res, function(err, result) {
                         component.news = result.rss.channel[0].item
                         console.log(result);
                     }
                 )
        }
      );
    }
}
