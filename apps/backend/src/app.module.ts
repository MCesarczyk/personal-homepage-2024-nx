import { Module } from '@nestjs/common';
import { BackendFeatureSkillModule } from '@ph24/backend-feature-skill';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { SkillModule } from './skill/skill.module';
import { ProjectModule } from './project/project.module';
import { ProjectImageModule } from './project-image/project-image.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    // SkillModule,
    BackendFeatureSkillModule,
    ProjectModule,
    ProjectImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
