import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Project, UpdateProjectDto, CreateProjectDto } from '@ph24/nest/data-access-project';
import { NestFeatureProjectService } from './nest-feature-project.service';
import { ReqUserId } from '@ph24/nest/util';
import { NestFeatureAuthService } from '@ph24/nest/feature-auth';

@ApiBearerAuth()
@ApiTags('project')
@Controller({ version: '1', path: 'project' })
export class NestFeatureProjectController {
  constructor(private projectService: NestFeatureProjectService, private nestFeatureAuthService: NestFeatureAuthService) { }

  @Post()
  @ApiOperation({ summary: 'Create project' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: Project,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async create(
    @Body() data: CreateProjectDto,
    @Req() req: Request & { headers: { authorization: string } }
  ): Promise<Project> {
    const accessToken = req.headers.authorization?.split(' ')[1];

    const user = await this.nestFeatureAuthService.identifyUser(accessToken);
    if (!user) {
      throw new BadRequestException('You have to be logged in to create a project');
    }
    return await this.projectService.create(user, data);
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

