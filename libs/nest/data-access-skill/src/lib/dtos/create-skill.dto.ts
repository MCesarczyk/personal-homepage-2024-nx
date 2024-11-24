import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { ISkill, SkillState } from '@ph24/shared/domain';

export class CreateSkillDto implements Pick<ISkill, 'content' | 'state'> {
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
}
