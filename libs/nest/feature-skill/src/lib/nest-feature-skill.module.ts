import { Module } from '@nestjs/common';
import { NestFeatureSkillController } from './nest-feature-skill.controller';
import { NestFeatureSkillService } from './nest-feature-skill.service';
import { NestDataAccessSkillModule } from '@ph24/nest/data-access-skill';

@Module({
  imports: [NestDataAccessSkillModule],
  controllers: [NestFeatureSkillController],
  providers: [NestFeatureSkillService],
  exports: [NestFeatureSkillService],
})
export class NestFeatureSkillModule { }
