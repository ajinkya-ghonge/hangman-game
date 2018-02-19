import { Injectable } from '@angular/core';
import {Word} from "./word";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class WordsService {

  constructor() { }

  words : Word[][] = [
    [{id:1, w:"A"}, {id:2, w:"B"}, {id:3, w:"C"}, {id:4, w:"D"}],
    [{id: 5, w: "E"}, {id: 6, w: "F"}, {id: 7, w:"G"}, {id: 8, w:"H"}],
    [{id: 9, w: "I"}, {id: 10, w: "J"}, {id: 11, w:"K"}, {id: 12, w:"L"}],
    [{id: 13, w: "M"}, {id: 14, w: "N"}, {id: 15, w:"O"}, {id: 16, w:"P"}],
    [{id: 13, w: "Q"}, {id: 14, w: "R"}, {id: 15, w:"S"}, {id: 16, w:"T"}],
    [{id: 13, w: "U"}, {id: 14, w: "V"}, {id: 15, w:"W"}, {id: 16, w:"X"}],
    [{id: 13, w: "Y"}, {id: 14, w: "Z"}, {id: 15, w:" "}, {id: 16, w:" "}]
  ];

  initialWords : Word[][] = [
    [{id:1, w:"A"}, {id:2, w:"B"}, {id:3, w:"C"}, {id:4, w:"D"}],
    [{id: 5, w: "E"}, {id: 6, w: "F"}, {id: 7, w:"G"}, {id: 8, w:"H"}],
    [{id: 9, w: "I"}, {id: 10, w: "J"}, {id: 11, w:"K"}, {id: 12, w:"L"}],
    [{id: 13, w: "M"}, {id: 14, w: "N"}, {id: 15, w:"O"}, {id: 16, w:"P"}],
    [{id: 13, w: "Q"}, {id: 14, w: "R"}, {id: 15, w:"S"}, {id: 16, w:"T"}],
    [{id: 13, w: "U"}, {id: 14, w: "V"}, {id: 15, w:"W"}, {id: 16, w:"X"}],
    [{id: 13, w: "Y"}, {id: 14, w: "Z"}, {id: 15, w:" "}, {id: 16, w:" "}]
  ];

  getWords():Observable<Word[][]> {
       return of(this.words);
  };

  refreshWords(): Observable<Word[][]> {
    return of(this.initialWords);
  }
}
