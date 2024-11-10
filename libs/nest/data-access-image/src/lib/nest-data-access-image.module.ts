import { Module } from '@nestjs/common';
import { NestDataAccessImageService } from './nest-data-access-image.service';
import { NestPrismaClientModule } from '@ph24/nest/prisma-client';

@Module({
  imports: [NestPrismaClientModule],
  providers: [NestDataAccessImageService],
  exports: [NestDataAccessImageService],
})
export class NestDataAccessImageModule { }
