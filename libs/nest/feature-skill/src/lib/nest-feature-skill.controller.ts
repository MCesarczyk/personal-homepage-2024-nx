import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ISkill } from '@ph24/shared/domain';
import { Skill } from '@ph24/nest/data-access-skill';
import { CreateSkillDto, UpdateSkillDto } from '@ph24/nest/data-access-skill';
import { NestFeatureSkillService } from './nest-feature-skill.service';

@ApiBearerAuth()
@ApiTags('skill')
@Controller({ version: '1', path: 'skill' })
export class NestFeatureSkillController {
  constructor(private skillService: NestFeatureSkillService) { }

  @Post()
  @ApiOperation({ summary: 'Create skill' })
  @ApiResponse({
    status: 201,
    description: 'The skill has been successfully created.',
    type: Skill,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async create(@Body() data: CreateSkillDto): Promise<ISkill> {
    return await this.skillService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Get all skills' })
  @ApiResponse({
    status: 200,
    description: 'Return all skills.',
    type: [Skill],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async getAll(): Promise<ISkill[]> {
    return await this.skillService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get skill by id' })
  @ApiResponse({
    status: 200,
    description: 'Return skill by id.',
    type: Skill,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async getOne(@Param('id') id: string): Promise<ISkill | null> {
    return await this.skillService.getOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update skill by id' })
  @ApiResponse({
    status: 200,
    description: 'Return skill updated.',
    type: Skill,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async updateOne(@Param('id') id: string, @Body() data: UpdateSkillDto): Promise<ISkill | null> {
    return await this.skillService.updateOne(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete skill by id' })
  @ApiResponse({
    status: 200,
    description: 'Return skill deleted.',
    type: Skill,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async deleteOne(@Param('id') id: string): Promise<ISkill | null> {
    return await this.skillService.deleteOne(id);
  }
}
