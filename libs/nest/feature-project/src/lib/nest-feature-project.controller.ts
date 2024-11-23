import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Project, UpdateProjectDto, CreateProjectDto } from '@ph24/nest/data-access-project';
import { NestFeatureProjectService } from './nest-feature-project.service';
import { ReqUserId } from '@ph24/nest/util';

@ApiBearerAuth()
@ApiTags('project')
@Controller({ version: '1', path: 'project' })
export class NestFeatureProjectController {
  constructor(private projectService: NestFeatureProjectService) { }

  @Post()
  @ApiOperation({ summary: 'Create project' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: Project,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async create(@Body() data: CreateProjectDto): Promise<Project> {
    return await this.projectService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Get all projects' })
  @ApiResponse({
    status: 200,
    description: 'The records has been successfully retrieved.',
    type: [CreateProjectDto],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  findAll(@ReqUserId() userId: string) {
    return this.projectService.getAll(userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get project by id' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully retrieved.',
    type: CreateProjectDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  findOne(@ReqUserId() userId: string, @Param('id') id: string) {
    return this.projectService.getOne(userId, id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update project by id' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: CreateProjectDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  update(@ReqUserId() userId: string, @Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.updateOne(userId, id, updateProjectDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete project by id' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully deleted.',
    type: CreateProjectDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  remove(@ReqUserId() userId: string, @Param('id') id: string) {
    return this.projectService.deleteOne(userId, id);
  }
}

