import { Body, Controller, Get, Post } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get()
  async getAll(): Promise<string[]> {
    return this.gameService.getAll().arr;
  }

  @Post()
  async create(@Body() body: { game: string }) {
    this.gameService.create(body.game);
  }
}
