import { Module } from '@nestjs/common';
import { NestFeatureProjectController } from './nest-feature-project.controller';
import { NestFeatureProjectService } from './nest-feature-project.service';
import { NestDataAccessProjectModule } from '@ph24/nest/data-access-project';

@Module({
  imports: [NestDataAccessProjectModule],
  controllers: [NestFeatureProjectController],
  providers: [NestFeatureProjectService],
  exports: [NestFeatureProjectService],
})
export class NestFeatureProjectModule { }
