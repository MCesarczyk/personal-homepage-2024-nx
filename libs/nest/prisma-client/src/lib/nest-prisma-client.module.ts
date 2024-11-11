import { Module } from '@nestjs/common';
import { NestPrismaClientService } from './nest-prisma-client.service';

@Module({
  controllers: [],
  providers: [NestPrismaClientService],
  exports: [NestPrismaClientService],
})
export class NestPrismaClientModule { }
