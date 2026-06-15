import { Controller, Get } from '@nestjs/common';
import { pool } from './db';

@Controller('tasks')
export class AppController {
  @Get()
  async getTasks(): Promise<{ id: number; title: string; done: boolean }[]> {
    const { rows } = await pool.query(
      'SELECT id, title, done FROM tasks ORDER BY id',
    );
    return rows as { id: number; title: string; done: boolean }[];
  }

  @Get('hello')
  getHello(): string {
    return 'Hello World!';
  }
}
