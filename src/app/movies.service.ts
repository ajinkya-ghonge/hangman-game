import { Injectable } from '@angular/core';
import {of} from "rxjs/observable/of";
import {Observable} from "rxjs/Observable";
import {Movies} from "./movies";

@Injectable()
export class MoviesService {

  constructor() { }

  movies:Movies[] = [
    {name: "The Godfather", hint1: "This 1972 movie is considered the best mafia movie ever"},
    {name:"serpico", hint1: "This 1973 movie is a story of the police department"},
    {name:"The Happening", hint1: "This 2008 movie stars mark wahlberg"},
    {name:"A few good men", hint1: "You can't handle the truth"},
    {name:"Frankie and Johnny", hint1: "Al pacino tries to Michelle Phiffer"},
    {name:"A streetcar named desire", hint1: "This 1951 movie stars Marlon Brando"},
    {name:"The philadelphia story", hint1: "This 1940 movie stars Katherine Hepburn"},
    {name:"When harry met sally", hint1: "It had to be you"},
    {name:"Speed", hint1: "The plot contains break fail and an accelarator"},
    {name:"Jerry Maguire", hint1: "You had me at hello"}
  ];

  getMovie():Observable<Movies> {
    var randomNumber = Math.floor(Math.random() * 10);
    return of(this.movies[randomNumber]);
  };

}
