import { Body, Controller, Get, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { Game } from 'src/interfaces/game.interface';

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get(':whot')
  async generate(): Promise<Game> {
    return this.gameService.generate();
  }

  @Get()
  async get(): Promise<Game> {
    return this.gameService.get();
  }

  // @Post()
  // async create(@Body() body: { game: string }) {
  //   this.gameService.create(body.game);
  // }
}
