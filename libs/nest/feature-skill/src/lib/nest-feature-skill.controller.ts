import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NestFeatureSkillService } from './nest-feature-skill.service';
import { ISkill } from '@ph24/shared/domain';
import { CreateSkillDto } from 'libs/nest/feature-skill/src/lib/dtos/create-skill.dto';

@Controller('v1/skill')
export class NestFeatureSkillController {
  constructor(private nestFeatureSkillService: NestFeatureSkillService) { }

  @Post()
  create(@Body() data: CreateSkillDto): ISkill {
    return this.nestFeatureSkillService.create(data);
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
