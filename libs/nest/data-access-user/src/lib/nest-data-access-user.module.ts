import { Module } from '@nestjs/common';
import { NestDataAccessUserService } from './nest-data-access-user.service';
import { NestPrismaClientModule } from '@ph24/nest/prisma-client';

@Module({
  imports: [NestPrismaClientModule],
  providers: [NestDataAccessUserService],
  exports: [NestDataAccessUserService],
})
export class NestDataAccessUserModule { }
