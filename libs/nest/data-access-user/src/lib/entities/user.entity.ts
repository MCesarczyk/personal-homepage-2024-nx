import { ApiProperty } from '@nestjs/swagger';
import { IUser } from '@ph24/shared/domain';
import { IsNotEmpty, IsString } from 'class-validator';

export class User implements IUser {
  @ApiProperty({
    example: '53b542f6-e165-45df-8545-f8e8d47509b8',
    description: 'The id of the user',
  })
  @IsString()
  @IsNotEmpty()
  id!: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the user',
  })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({
    example: 'john.doe@mail.com',
    description: 'The email of the user',
  })
  @IsString()
  @IsNotEmpty()
  email!: string;

  @ApiProperty({
    example: 'password123',
    description: 'The password of the user',
  })
  @IsString()
  @IsNotEmpty()
  password!: string;

  @ApiProperty({
    example: 'Software Engineer',
    description: 'The occupation of the user',
  })
  @IsString()
  @IsNotEmpty()
  occupation!: string;

  @ApiProperty({
    example: 'I am a software engineer who loves to code',
    description: 'The introduction of the user',
  })
  @IsString()
  introduction!: string;
}
