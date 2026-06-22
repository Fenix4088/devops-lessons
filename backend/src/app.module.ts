import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health.controller';
import { MetricsModule } from './metrics.module';

@Module({
  imports: [MetricsModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
