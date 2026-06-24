import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health.controller';
import { MetricsModule } from './metrics.module';
import { MetricsMiddleware } from './metrics/metrics.middleware';

@Module({
  imports: [MetricsModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MetricsMiddleware)
      .exclude('metrics') // не измеряем сам /metrics эндпоинт
      .forRoutes('*');
  }
}
