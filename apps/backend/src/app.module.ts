import { Module } from '@nestjs/common';
import { NestFeatureSkillModule } from '@ph24/nest/feature-skill';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AuthModule } from './auth/auth.module';
// import { UserModule } from './user/user.module';
import { NestFeatureProjectModule } from '@ph24/nest/feature-project';
import { NestFeatureUserModule } from '@ph24/nest/feature-user';
import { NestFeatureImageModule } from '@ph24/nest/feature-image';

@Module({
  imports: [
    // AuthModule,
    // UserModule,
    NestFeatureSkillModule,
    NestFeatureProjectModule,
    NestFeatureImageModule,
    NestFeatureUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
