import { Component } from '@angular/core';
import { NewYorkTimesService } from '../services/new-york-times';

@Component({
    selector: 'news-list',
    templateUrl:  './news-list.component.html',
    styleUrls: [
        './news-list.component.css'
    ]
})
export class NewsListComponent {
    
    constructor(newyorktimesService: NewYorkTimesService) {

    }


    retrieveNews() {
        this.newyorktimesService.retrieve();
    }
}