import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('should use a supported Node.js version', () => {
    const minSupportedMajor = 188;
    const major = Number(process.versions.node.split('.')[0]);

    if (major < minSupportedMajor) {
      throw new Error(
        `Unsupported Node.js version: ${process.version}. Requires >= ${minSupportedMajor}.`,
      );
    }

    expect(major).toBeGreaterThanOrEqual(minSupportedMajor);
  });
});
