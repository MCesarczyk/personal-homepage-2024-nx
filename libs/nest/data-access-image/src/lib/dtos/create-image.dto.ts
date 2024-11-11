import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateImageDto {
  @ApiProperty({
    example: 'https://example.com/image.png',
    description: 'The url of the project image',
  })
  @IsString()
  @IsNotEmpty()
  url!: string;

  @ApiProperty({
    example: '9abf6400-1ce4-4fc8-a80a-05c0c2c697d7',
    description: 'The id of the project',
  })
  @IsString()
  @IsNotEmpty()
  projectId!: string;
}
