import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { pool } from './db';

@Controller('tasks')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getTasks(): Promise<{ id: number; title: string; done: boolean }[]> {
    const { rows } = await pool.query(
      'SELECT id, title, done FROM tasks ORDER BY id',
    );
    return rows as { id: number; title: string; done: boolean }[];
  }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
