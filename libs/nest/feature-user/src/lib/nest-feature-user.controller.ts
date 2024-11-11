import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto, User } from '@ph24/nest/data-access-user';
import { NestFeatureUserService } from './nest-feature-user.service';

@ApiBearerAuth()
@ApiTags('user')
@Controller({ version: '1', path: 'user' })
export class NestFeatureUserController {
  constructor(private userService: NestFeatureUserService) { }

  @Post()
  @ApiOperation({ summary: 'Create user account' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The user account has been successfully created.',
    type: User,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  create(@Body() data: CreateUserDto): Promise<User> {
    return this.userService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all users.',
    type: [User],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get user by id',
    type: User,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  getOne(@Param('id') id: string): Promise<User | null> {
    return this.userService.getOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return user updated.',
    type: User,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  updateOne(@Param('id') id: string, @Body() data: UpdateUserDto): Promise<User | null> {
    return this.userService.updateOne(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return user deleted.',
    type: User,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  deleteOne(@Param('id') id: string): Promise<User | null> {
    return this.userService.deleteOne(id);
  }
}
