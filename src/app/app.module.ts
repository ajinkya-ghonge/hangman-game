import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WordsComponent } from './words/words.component';
import {WordsService} from "./words.service";
import {MoviesService} from "./movies.service";


@NgModule({
  declarations: [
    AppComponent,
    WordsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WordsService, MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
