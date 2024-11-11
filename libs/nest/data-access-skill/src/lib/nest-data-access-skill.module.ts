import { Module } from '@nestjs/common';
import { NestPrismaClientModule } from '@ph24/nest/prisma-client';
import { NestDataAccessSkillService } from './nest-data-access-skill.service';

@Module({
  providers: [NestDataAccessSkillService],
  imports: [NestPrismaClientModule],
  exports: [NestDataAccessSkillService],
})
export class NestDataAccessSkillModule { }
