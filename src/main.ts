import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { MongoExceptionFilter } from './filters/mongo-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Automatically transform payloads to match DTO classes
      whitelist: true, // Strip out properties not allowed by the DTO
    }),
  );
  app.useGlobalFilters(new MongoExceptionFilter());
  await app.listen(8080);
}
bootstrap();
