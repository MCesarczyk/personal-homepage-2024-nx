import { Module } from '@nestjs/common';
import { NestPrismaClientModule } from '@ph24/nest/prisma-client';
import { NestDataAccessProjectService } from './nest-data-access-project.service';

@Module({
  imports: [NestPrismaClientModule],
  providers: [NestDataAccessProjectService],
  exports: [NestDataAccessProjectService],
})
export class NestDataAccessProjectModule { }
