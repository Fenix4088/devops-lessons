import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { pool } from './db';
import { ReadinessService } from './readiness.service';

@Controller('api/health')
export class HealthController {
  constructor(private readonly readinessService: ReadinessService) {}

  @Get()
  async getHealth() {
    try {
      await pool.query('SELECT 1');
      return { status: 'ok', db: 'up' };
    } catch {
      return { status: 'degraded', db: 'down' };
    }
  }

  @Get('ready')
  getReady() {
    if (!this.readinessService.isReady()) {
      throw new HttpException(
        'Service is not ready',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }

    return { status: 'ready' };
  }
}
