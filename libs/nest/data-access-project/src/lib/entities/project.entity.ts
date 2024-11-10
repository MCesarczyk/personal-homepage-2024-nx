import { ApiProperty } from '@nestjs/swagger';
import { IProject } from '@ph24/shared/domain';
import { IsNotEmpty, IsString } from 'class-validator';

export class Project implements IProject {
  @ApiProperty({
    example: '9abf6400-1ce4-4fc8-a80a-05c0c2c697d7',
    description: 'The id of the project',
  })
  @IsString()
  @IsNotEmpty()
  id!: string;

  @ApiProperty({
    example: 'My project',
    description: 'The title of the project',
  })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({
    example: 'This is my project',
    description: 'The description of the project',
  })
  @IsString()
  @IsNotEmpty()
  description!: string;

  @ApiProperty({
    example: 'https://github.com/username/project',
    description: 'The url of the project code',
  })
  @IsString()
  @IsNotEmpty()
  codeUrl!: string;

  @ApiProperty({
    example: 'https://username.github.io/project',
    description: 'The url of the project demo',
  })
  @IsString()
  @IsNotEmpty()
  demoUrl!: string;

  @ApiProperty({
    example: '9abf6400-1ce4-4fc8-a80a-05c0c2c697d7',
    description: 'The id of the user that created the project',
  })
  @IsString()
  @IsNotEmpty()
  userId!: string;
}
