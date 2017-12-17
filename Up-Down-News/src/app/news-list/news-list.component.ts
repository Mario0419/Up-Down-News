import { Component } from '@angular/core';
import { NewYorkTimesService } from '../services/new-york-times';
import { GoodNewsService } from '../services/good-news.services';

@Component({
    selector: 'news-list',
    templateUrl:  './news-list.component.html',
    styleUrls: [
        './news-list.component.css'
    ],
    providers: [NewYorkTimesService,GoodNewsService]
})
export class NewsListComponent {

    constructor(private newyorktimesService: NewYorkTimesService,
    private goodnewsService: GoodNewsService) {

    }


    retrieveNews() {
        this.newyorktimesService.retrieve();
    }

    retrieveGoodNews(){
      this.goodnewsService.retrieve();
    }
}
