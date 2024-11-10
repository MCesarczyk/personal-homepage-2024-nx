import { Module } from '@nestjs/common';
import { BackendFeatureSkillController } from './backend-feature-skill.controller';
import { BackendFeatureSkillService } from './backend-feature-skill.service';

@Module({
  controllers: [BackendFeatureSkillController],
  providers: [BackendFeatureSkillService],
  exports: [BackendFeatureSkillService],
})
export class BackendFeatureSkillModule {}
