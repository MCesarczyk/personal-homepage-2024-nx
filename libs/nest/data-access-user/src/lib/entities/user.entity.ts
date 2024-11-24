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

  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ5MjY4NDJiLWNkMTgtNDQ4Zi1hMWI5LWNjNDcxYThlY2I0ZCIsInRva2VuSWQiOiIyMTRkMWY3ZC0wNmYwLTQ2ZjgtOTBmMC0wYjE2OGVlMjE4ZTUiLCJpYXQiOjE3MzI0MDcxNTAsImV4cCI6MTczMzAxMTk1MH0.9WdfXrZe737kjKiutZ7ANu-1RI0h8CY7U1dKtrzavME',
    description: 'The refresh token for the user',
  })
  @IsString()
  refreshToken!: string | null;
}
