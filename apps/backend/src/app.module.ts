import { Module } from '@nestjs/common';
import { NestFeatureSkillModule } from '@ph24/nest/feature-skill';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AuthModule } from './auth/auth.module';
// import { UserModule } from './user/user.module';
import { NestFeatureProjectModule } from '@ph24/nest/feature-project';
import { NestFeatureUserModule } from '@ph24/nest/feature-user';
import { NestFeatureImageModule } from '@ph24/nest/feature-image';
import { NestFeatureAuthModule } from '@ph24/nest/feature-auth';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '@ph24/nest/util';

@Module({
  imports: [
    // AuthModule,
    // UserModule,
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
