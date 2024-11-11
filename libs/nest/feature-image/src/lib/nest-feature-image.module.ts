import { Module } from '@nestjs/common';
import { NestFeatureImageController } from './nest-feature-image.controller';
import { NestFeatureImageService } from './nest-feature-image.service';
import { NestDataAccessImageModule } from '@ph24/nest/data-access-image';

@Module({
  imports: [NestDataAccessImageModule],
  controllers: [NestFeatureImageController],
  providers: [NestFeatureImageService],
  exports: [NestFeatureImageService],
})
export class NestFeatureImageModule { }
