import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';
import { ValidationPipe, VersioningType } from '@nestjs/common';

const port = process.env.PORT || 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix, { exclude: ['/'] });

  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'v',
  })

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.enableCors({
    origin: [
      process.env.FRONTEND_URL,
      process.env.ADMIN_URL,
      process.env.PUBLIC_URL
    ],
    credentials: true,
  });

  app.use(cookieParser());

  const developmentOptions = new DocumentBuilder()
    .setTitle('Personal Homepage API - development')
    .setDescription(
      `Backend for Personal Homepage website. Available on: ${process.env.DEVELOPMENT_URL}. This API is used to manage the content of the homepage.`,
    )
    .setVersion('1.0')
    .addServer(`${process.env.DEVELOPMENT_URL}`, 'Development')
    .addServer(`${process.env.PRODUCTION_URL}`, 'Production')
    .addBearerAuth()
    .build();

  const productionOptions = new DocumentBuilder()
    .setTitle('Personal Homepage API - production')
    .setDescription(
      `Backend for Personal Homepage website. Available on: ${process.env.PRODUCTION_URL}. This API is used to manage the content of the homepage.`,
    )
    .setVersion('1.0')
    .addServer(`${process.env.PRODUCTION_URL}`, 'Production')
    .addBearerAuth()
    .build();

  const options =
    process.env.NODE_ENV === 'production' ? productionOptions : developmentOptions;

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(port, '0.0.0.0');
  console.log(`Server running on ${port} 🚀`);
}

bootstrap();
