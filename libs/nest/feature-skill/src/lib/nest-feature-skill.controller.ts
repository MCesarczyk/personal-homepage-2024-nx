import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NestFeatureSkillService } from './nest-feature-skill.service';
import { ISkill } from '@ph24/shared/domain';

@Controller('v1/skill')
export class NestFeatureSkillController {
  constructor(private nestFeatureSkillService: NestFeatureSkillService) { }

  @Post()
  create(@Body() skill: ISkill): ISkill {
    return this.nestFeatureSkillService.create(skill);
  }

  @Get()
  getAll(): ISkill[] {
    return this.nestFeatureSkillService.getAll();
  }

  @Get(':id')
  getOne(@Param(':id') id: string): ISkill {
    return this.nestFeatureSkillService.getOne(id);
  }
}
