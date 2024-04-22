import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';

const port = process.env.PORT || 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1', { exclude: ['/'] });
  app.enableCors({
    origin: [
      'http://localhost:4000',
      'https://www.cesarczyk.dev',
      'https://cesarczyk.dev',
      'https://home.cesarczyk.dev',
    ],
    credentials: true,
  });
  app.use(cookieParser());

  const developmentOptions = new DocumentBuilder()
    .setTitle('Personal Homepage API - development')
    .setDescription(
      `Backend for Personal Homepage website. Available on: http://localhost:${process.env.PORT}/. This API is used to manage the content of the homepage.`,
    )
    .setVersion('1.0')
    .addServer(`http://localhost:${process.env.PORT}/`, 'Development')
    .addServer(`${process.env.PRODUCTION_URL}`, 'Production')
    .addBearerAuth()
    .build();

  const productionOptions = new DocumentBuilder()
    .setTitle('Personal Homepage API - production')
    .setDescription(
      `Backend for Personal Homepage website. Available on: ${process.env.PUBLIC_URL || process.env.PRODUCTION_URL}. This API is used to manage the content of the homepage.`,
    )
    .setVersion('1.0')
    .addServer(`${process.env.PRODUCTION_URL}`, 'Production')
    .addBearerAuth()
    .build();

  const options =
    process.env.ENV === 'production' ? productionOptions : developmentOptions;

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(port, '0.0.0.0');
}
bootstrap();
