import { Component } from '@angular/core';
import { NewYorkTimesService } from '../services/new-york-times';
import { GoodNewsService } from '../services/good-news.service';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Parser, parseString } from 'xml2js';
import { Article } from '../objects';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { NewsService } from '../services/news.service';

@Component({
    selector: 'news-list',
    templateUrl: './news-list.component.html',
    styleUrls: [
        './news-list.component.css'
    ],
    providers: [NewYorkTimesService, GoodNewsService, NewsService]
})
export class NewsListComponent implements OnInit {

    news: Article[] = [];

    constructor(private newyorktimesService: NewYorkTimesService,
        private goodnewsService: GoodNewsService,
        private newsService: NewsService,
        private route: ActivatedRoute,
        private router: Router, ) {

        
    }

    ngOnInit() {
        var component = this;
        this.route.params.subscribe(params => {
            this.newsService.retrieveNews(params['source'], params['category']).subscribe(
                res => {
                    parseString(
                        res, function(err, result) {
                            component.news = <Article[]>result.rss.channel[0].item;
                        }
                    )
                }
            )
            console.log(params);
        })
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

    retrieveGoodNews() {
        var component = this;
        this.goodnewsService.retrieveGoodNews("news-health/feed/").subscribe(
            res => {
                parseString(
                    res, function (err, result) {
                        component.news = result.rss.channel[0].item
                        console.log(result);
                    }
                )
            }
        );
    }
}
