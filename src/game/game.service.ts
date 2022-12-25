import { Injectable } from '@nestjs/common';
import { Game } from 'src/interfaces/game.interface';

@Injectable()
export class GameService {
  private games: Game = { arr: ['Bogdan', 'Pasterak'] };

  create(s: string) {
    this.games.arr.push(s);
  }

  getAll(): Game {
    return { ...this.games };
  }
}
