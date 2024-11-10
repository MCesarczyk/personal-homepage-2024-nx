import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BackendFeatureSkillService } from './backend-feature-skill.service';
import { ISkill } from '@ph24/shared/domain';

@Controller('v1/skill')
export class BackendFeatureSkillController {
  constructor(private backendFeatureSkillService: BackendFeatureSkillService) { }

  @Post()
  create(@Body() skill: ISkill): ISkill {
    return this.backendFeatureSkillService.create(skill);
  }

  @Get()
  getAll(): ISkill[] {
    return this.backendFeatureSkillService.getAll();
  }

  @Get(':id')
  getOne(@Param(':id') id: string): ISkill {
    return this.backendFeatureSkillService.getOne(id);
  }
}
