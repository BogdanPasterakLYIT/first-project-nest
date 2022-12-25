import { Injectable } from '@nestjs/common';
import { Game } from 'src/interfaces/game.interface';

@Injectable()
export class GameService {
  private game: Game = { board: new Array(...'                ') };

  // create(s: string) {
  //   this.games.arr.push(s);
  // }
  generate(): Game {
    // 4 letter on random position foom 0 to 14 (15 is space, " ")
    ['a', 'b', 'c', 'd'].forEach((l) => {
      let index: number; // integer
      do index = Math.floor(Math.random() * 15);
      while (this.game.board[index] != ' ');
      this.game.board[index] = l;
    });

    // fill rest of position (excluding last) with "x"
    this.game.board.forEach((e, index) => {
      if (index < 15 && e == ' ') e = 'x';
    });

    // return copy of game
    return { ...this.game };
  }

  get(): Game {
    return { ...this.game };
  }
}
