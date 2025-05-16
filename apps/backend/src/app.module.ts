import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '@ph24/nest/util';
import { NestFeatureAuthModule } from '@ph24/nest/feature-auth';
import { NestFeatureUserModule } from '@ph24/nest/feature-user';
import { NestFeatureSkillModule } from '@ph24/nest/feature-skill';
import { NestFeatureProjectModule } from '@ph24/nest/feature-project';
import { NestFeatureImageModule } from '@ph24/nest/feature-image';

@Module({
  imports: [
    NestFeatureSkillModule,
    NestFeatureProjectModule,
    NestFeatureImageModule,
    NestFeatureUserModule,
    NestFeatureAuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule { }
