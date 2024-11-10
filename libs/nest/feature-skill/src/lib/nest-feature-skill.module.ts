import { Module } from '@nestjs/common';
import { NestFeatureSkillController } from './nest-feature-skill.controller';
import { NestFeatureSkillService } from './nest-feature-skill.service';

@Module({
  controllers: [NestFeatureSkillController],
  providers: [NestFeatureSkillService],
  exports: [NestFeatureSkillService],
})
export class NestFeatureSkillModule { }
