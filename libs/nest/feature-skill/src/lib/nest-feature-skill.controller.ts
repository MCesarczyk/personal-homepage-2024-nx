import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Skill, CreateSkillDto, UpdateSkillDto } from '@ph24/nest/data-access-skill';
import { NestFeatureSkillService } from './nest-feature-skill.service';
import { ReqUserId } from '@ph24/nest/util';

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
  async create(@Body() data: CreateSkillDto): Promise<Skill> {
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
  async getAll(@ReqUserId() userId: string): Promise<Skill[]> {
    return await this.skillService.getAll(userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get skill by id' })
  @ApiResponse({
    status: 200,
    description: 'Return skill by id.',
    type: Skill,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async getOne(@ReqUserId() userId: string, @Param('id') id: string): Promise<Skill | null> {
    return await this.skillService.getOne(userId, id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update skill by id' })
  @ApiResponse({
    status: 200,
    description: 'Return skill updated.',
    type: Skill,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async updateOne(@ReqUserId() userId: string, @Param('id') id: string, @Body() data: UpdateSkillDto): Promise<Skill | null> {
    return await this.skillService.updateOne(userId, id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete skill by id' })
  @ApiResponse({
    status: 200,
    description: 'Return skill deleted.',
    type: Skill,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async deleteOne(@ReqUserId() userId: string, @Param('id') id: string): Promise<Skill | null> {
    return await this.skillService.deleteOne(userId, id);
  }
}
