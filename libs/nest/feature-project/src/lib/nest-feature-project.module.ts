import { Module } from '@nestjs/common';
import { NestFeatureProjectController } from './nest-feature-project.controller';
import { NestFeatureProjectService } from './nest-feature-project.service';
import { NestDataAccessProjectModule } from '@ph24/nest/data-access-project';
import { NestFeatureAuthModule } from '@ph24/nest/feature-auth';

@Module({
  imports: [NestDataAccessProjectModule, NestFeatureAuthModule],
  controllers: [NestFeatureProjectController],
  providers: [NestFeatureProjectService],
  exports: [NestFeatureProjectService],
})
export class NestFeatureProjectModule { }
