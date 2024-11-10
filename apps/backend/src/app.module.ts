import { Module } from '@nestjs/common';
import { NestFeatureSkillModule } from '@ph24/nest/feature-skill';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
// import { ProjectModule } from './project/project.module';
// import { ProjectImageModule } from './project-image/project-image.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    NestFeatureSkillModule,
    // ProjectModule,
    // ProjectImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
