import { Component } from '@angular/core';
import { NewYorkTimesService } from '../services/new-york-times';
import { GoodNewsService } from '../services/good-news.service';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Parser, parseString } from 'xml2js';
import { Article } from '../objects';


@Component({
    selector: 'news-list',
    templateUrl: './news-list.component.html',
    styleUrls: [
        './news-list.component.css'
    ],
    providers: [NewYorkTimesService,GoodNewsService]
})
export class NewsListComponent implements OnInit {

    news: Article[] = [];

    constructor(private newyorktimesService: NewYorkTimesService,
    private goodnewsService: GoodNewsService){

    }

    ngOnInit() {
    }


    retrieveNews() {
        var component = this;
        this.newyorktimesService.retrieveNews("ProFootball").subscribe(
            res => {
                parseString(
                    res, function (err, result) {
                        component.news = <Article[]>result.rss.channel[0].item
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
                         component.news = <Article[]>result.rss.channel[0].item
                     }
                 )
        }
      );
    }

}
