import { Component } from '@angular/core';
import { NewYorkTimesService } from './services/new-york-times';
import { GoodNewsService } from './services/good-news.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Title1 = 'Mario';
  newYorkTimesCategories: string[];
  goodNewsCategories: string[];

  constructor(private newyorktimesService: NewYorkTimesService,
              private goodNewsService: GoodNewsService,
              private router: Router) {
    this.newYorkTimesCategories = this.newyorktimesService.categories;
    this.goodNewsCategories = this.goodNewsService.categories;
  }

  navigate(source: string, category: string) {
    this.router.navigate(['/news', source, category]);
  }

}
