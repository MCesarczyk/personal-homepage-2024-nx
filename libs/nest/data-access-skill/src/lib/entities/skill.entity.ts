import { ApiProperty } from '@nestjs/swagger';
import { ISkill } from '@ph24/shared/domain';
import { SkillState } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class Skill implements ISkill {
  @ApiProperty({
    example: '53b542f6-e165-45df-8545-f8e8d47509b8',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  id!: string;

  @ApiProperty({
    example: 'skill name',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  content!: string;

  @ApiProperty({
    example: 'PLANNED',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  state!: SkillState;

  @ApiProperty({
    example: '53b542f6-e165-45df-8545-f8e8d47509b8',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  userId!: string;
}
