import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { NestFeatureImageService } from './nest-feature-image.service';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateImageDto, Image, UpdateImageDto } from '@ph24/nest/data-access-image';
import { IImage } from '@ph24/shared/domain';

@ApiBearerAuth()
@ApiTags('image')
@Controller({ version: '1', path: 'image' })
export class NestFeatureImageController {
  constructor(private imageService: NestFeatureImageService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new image.' })
  @ApiResponse({
    status: 201,
    description: 'Image created successfully.',
    type: Image,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  create(
    @Body() createProjectImageDto: CreateImageDto,
  ): Promise<IImage> {
    return this.imageService.create(createProjectImageDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all images.' })
  @ApiResponse({
    status: 200,
    description: 'Retrieved all images.',
    type: [Image],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  findAll(): Promise<IImage[]> {
    return this.imageService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get image by id.' })
  @ApiResponse({
    status: 200,
    description: 'Retrieved image.',
    type: Image,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  findOne(@Param('id') id: string): Promise<IImage | null> {
    return this.imageService.getOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a project image.' })
  @ApiResponse({
    status: 200,
    description: 'Updated a project image.',
    type: Image,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  update(
    @Param('id') id: string,
    @Body() updateProjectImageDto: UpdateImageDto,
  ): Promise<IImage | null> {
    return this.imageService.updateOne(id, updateProjectImageDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a project image.' })
  @ApiResponse({
    status: 200,
    description: 'Removed a project image.',
    type: Image,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  remove(@Param('id') id: string): Promise<IImage | null> {
    return this.imageService.deleteOne(id);
  }
}

