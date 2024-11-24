import { ApiProperty } from '@nestjs/swagger';
import { IProject } from '@ph24/shared/domain';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectDto implements Omit<IProject, 'id' | 'userId'> {
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
    example: 'http://github.com/username/project',
    description: 'The url of the project code',
  })
  @IsString()
  @IsNotEmpty()
  codeUrl!: string;

  @ApiProperty({
    example: 'http://username.github.io/project',
    description: 'The url of the project demo',
  })
  @IsString()
  @IsNotEmpty()
  demoUrl!: string;
}
