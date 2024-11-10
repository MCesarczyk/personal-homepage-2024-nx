import { Module } from '@nestjs/common';
import { NestFeatureUserController } from './nest-feature-user.controller';
import { NestFeatureUserService } from './nest-feature-user.service';
import { NestDataAccessUserModule } from '@ph24/nest/data-access-user';

@Module({
  imports: [NestDataAccessUserModule],
  controllers: [NestFeatureUserController],
  providers: [NestFeatureUserService],
  exports: [NestFeatureUserService],
})
export class NestFeatureUserModule { }
