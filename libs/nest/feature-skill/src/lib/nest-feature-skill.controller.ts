import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSkillDto, UpdateSkillDto, SkillDataDto } from '@ph24/nest/data-access-skill';
import { NestFeatureSkillService } from './nest-feature-skill.service';
import { ReqUserId } from '@ph24/nest/util';
import { NestFeatureAuthService } from '@ph24/nest/feature-auth';

@ApiBearerAuth()
@ApiTags('skill')
@Controller({ version: '1', path: 'skill' })
export class NestFeatureSkillController {
  constructor(private skillService: NestFeatureSkillService, private nestFeatureAuthService: NestFeatureAuthService) { }

  @Post()
  @ApiOperation({ summary: 'Create skill' })
  @ApiResponse({
    status: 201,
    description: 'The skill has been successfully created.',
    type: SkillDataDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async create(
    @Body() data: CreateSkillDto,
    @Req() req: Request & { headers: { authorization: string } }
  ): Promise<SkillDataDto> {
    const accessToken = req.headers.authorization?.split(' ')[1];

    const user = await this.nestFeatureAuthService.identifyUser(accessToken);
    if (!user) {
      throw new BadRequestException('You have to be logged in to create a skill');
    }

    return await this.skillService.create(user, data);
  }

  @Get()
  @ApiOperation({ summary: 'Get all skills' })
  @ApiResponse({
    status: 200,
    description: 'Return all skills.',
    type: [SkillDataDto],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async getAll(@ReqUserId() userId: string): Promise<SkillDataDto[]> {
    return await this.skillService.getAll(userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get skill by id' })
  @ApiResponse({
    status: 200,
    description: 'Return skill by id.',
    type: SkillDataDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async getOne(@ReqUserId() userId: string, @Param('id') id: string): Promise<SkillDataDto | null> {
    return await this.skillService.getOne(userId, id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update skill by id' })
  @ApiResponse({
    status: 200,
    description: 'Return skill updated.',
    type: SkillDataDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async updateOne(@ReqUserId() userId: string, @Param('id') id: string, @Body() data: UpdateSkillDto): Promise<SkillDataDto | null> {
    return await this.skillService.updateOne(userId, id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete skill by id' })
  @ApiResponse({
    status: 200,
    description: 'Return skill deleted.',
    type: SkillDataDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async deleteOne(@ReqUserId() userId: string, @Param('id') id: string): Promise<SkillDataDto | null> {
    return await this.skillService.deleteOne(userId, id);
  }
}
