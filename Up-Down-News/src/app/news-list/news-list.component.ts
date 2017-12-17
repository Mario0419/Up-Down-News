import { Component } from '@angular/core';
import { NewYorkTimesService } from '../services/new-york-times';
import { GoodNewsService } from '../services/good-news.service';
import { parseString } from 'xml2js';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'news-list',
    templateUrl:  './news-list.component.html',
    styleUrls: [
        './news-list.component.css'
    ],
    providers: [NewYorkTimesService,GoodNewsService]
})
export class NewsListComponent {
    news = "Richie";
    constructor(private newyorktimesService: NewYorkTimesService,
    private goodnewsService: GoodNewsService) {

    }


    retrieveNews() {
        this.newyorktimesService.retrieveNews("ProFootball");
    }

    retrieveGoodNews(){
      this.goodnewsService.retrieveGoodNews("news-health/feed/").subscribe(
        res=>{
          parseString(
                     res, function(err, result) {
                         console.log(result);
                     }
                 )
        }
      );
    }
}
