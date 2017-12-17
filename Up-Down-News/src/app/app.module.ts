import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NewYorkTimesService } from './services/new-york-times';
import { GoodNewsService } from './services/good-news.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [NewYorkTimesService,GoodNewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
