import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ISkill } from '@ph24/shared/domain';
import { NestFeatureSkillService } from './nest-feature-skill.service';
import { Skill } from './entities/skill.entity';
import { CreateSkillDto } from './dtos/create-skill.dto';
import { UpdateSkillDto } from './dtos/update-skill.dto';

@ApiBearerAuth()
@ApiTags('skill')
@Controller({ version: '1', path: 'skill' })
export class NestFeatureSkillController {
  constructor(private nestFeatureSkillService: NestFeatureSkillService) { }

  @Post()
  @ApiOperation({ summary: 'Create skill' })
  @ApiResponse({
    status: 201,
    description: 'The skill has been successfully created.',
    type: Skill,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  create(@Body() data: CreateSkillDto): ISkill {
    return this.nestFeatureSkillService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Get all skills' })
  @ApiResponse({
    status: 200,
    description: 'Return all skills.',
    type: [Skill],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  getAll(): ISkill[] {
    return this.nestFeatureSkillService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get skill by id' })
  @ApiResponse({
    status: 200,
    description: 'Return skill by id.',
    type: Skill,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  getOne(@Param('id') id: string): ISkill {
    return this.nestFeatureSkillService.getOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update skill by id' })
  @ApiResponse({
    status: 200,
    description: 'Return skill updated.',
    type: Skill,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  updateOne(@Param('id') id: string, @Body() data: UpdateSkillDto): ISkill {
    return this.nestFeatureSkillService.updateOne(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete skill by id' })
  @ApiResponse({
    status: 200,
    description: 'Return skill deleted.',
    type: Skill,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  deleteOne(@Param('id') id: string): void {
    return this.nestFeatureSkillService.deleteOne(id);
  }
}
