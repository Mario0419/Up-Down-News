import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NewYorkTimesService } from './services/new-york-times';
import { GoodNewsService } from './services/good-news.service';
import { NewsService } from './services/news.service';
import { HttpClientModule } from '@angular/common/http';
import { NewsListComponent } from './news-list/news-list.component';
import { RouterModule, Routes} from '@angular/router';
import { ReplaceGoodNews } from './pipe/newsDescription.pipe'; // import our pipe here
import { PrettyOpts } from './pipe/prettyOpts.pipe';

const appRoutes: Routes = [
  {
    path: 'news/:source/:category', component: NewsListComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    ReplaceGoodNews,
    PrettyOpts
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NewYorkTimesService,GoodNewsService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
