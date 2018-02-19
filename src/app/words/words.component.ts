import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Word} from "../word";
import {WordsService} from "../words.service";
import {MoviesService} from "../movies.service";
import {Movies} from "../movies";

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  words: Word[][];
  movies:Movies;
  match:string[];
  mistake:number;
  image: string;
  score: number;
  check: boolean;
  result:string;
  inProgress:boolean;

  onselect(w: Word) {
    this.check = false;
    for(var i = 0; i < this.movies.name.length; i++) {
      if(w.w.toLowerCase() == this.movies.name[i].toLowerCase()) {
        this.match[i] = w.w;
        this.check = true;
        this.score++;
      }
    }
    this.checkIfPassed();
    if(!this.check) this.mistake--;
    w.w = "X";
    if(this.mistake == 0) {
      this.result = "Sorry, better luck next time";
      this.inProgress = false;

    }
  };

  checkIfPassed():void {
    for(var i = 0; i < this.movies.name.length; i++) {
      if(this.match[i].toLowerCase() != this.movies.name[i].toLowerCase()) return;
    }
    this.result = "Congrats";
    this.inProgress = false;
  }

  @Output() change = new EventEmitter();

  getWords(): void {
    this.wordService.getWords().subscribe(words => this.words = words);
  }

  getMovies(): void {
    this.moviesService.getMovie().subscribe(movie => this.movies = movie);
  }

  generateMatch():void {
    this.match = [];
    for(var i = 0; i < this.movies.name.length; i++) {
      if(this.movies.name[i] == ' ') {
        this.match[i] = " ";
      } else {
        this.match[i] = "-";
      }
    }
  }

  constructor(public wordService: WordsService, private moviesService: MoviesService) { }

  ngOnInit() {
    this.mistake = 3;
    this.score = 0;
    this.getWords();
    this.getMovies();
    this.generateMatch();
    this.image = '/assets/' + this.movies.name + '.jpg';
    this.inProgress = true;
    this.result = null;
  }

  toggle(): void {
    this.getWords();
  }

}
