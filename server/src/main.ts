import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exception-filters/http.exception-filter';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix(configService.get<string>('apiBasePath'));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      disableErrorMessages: false,
    }),
  );

  app.enableCors({
    origin: '*', //'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token'],
    credentials: true,
  });

  app.useGlobalFilters(new HttpExceptionFilter());

  const port = configService.get<number>('port') || 3000;
  await app.listen(port);

  console.log('\x1b[36m%s\x1b[0m', '🚀 Server is running!');
  console.log('\x1b[32m%s\x1b[0m', `🌍 Application: http://localhost:${port}`);
}

bootstrap();
