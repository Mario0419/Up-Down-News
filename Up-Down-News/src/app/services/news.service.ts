import { Injectable } from "@angular/core";
import { NewYorkTimesService } from "./new-york-times";
import { GoodNewsService } from "./good-news.service";



@Injectable()
export class NewsService {
    constructor(private newyorktimesService: NewYorkTimesService,
        private goodNewsService: GoodNewsService) {

    }

    retrieveNews(source: string, category: string) {
        if (source === "newyorktimes") {
            return this.newyorktimesService.retrieveNews(category);
        } else if (source === "goodNews") {
            return this.goodNewsService.retrieveGoodNews(category);
        }
    }
}