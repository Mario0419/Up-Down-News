import { Component } from '@angular/core';
import { NewYorkTimesService } from '../services/new-york-times';

@Component({
    selector: 'news-list',
    templateUrl:  './news-list.component.html',
    styleUrls: [
        './news-list.component.css'
    ],
    providers: [NewYorkTimesService]
})
export class NewsListComponent {
    
    constructor(private newyorktimesService: NewYorkTimesService) {

    }


    retrieveNews() {
        this.newyorktimesService.retrieve();
    }
}