import { ApiProperty } from '@nestjs/swagger';
import { IRefreshToken } from '@ph24/shared/domain';
import { IsNotEmpty, IsString } from 'class-validator';

export class RefreshTokenDto implements IRefreshToken {
  @ApiProperty({
    type: String,
    required: true,
    example: ''
  })
  @IsString()
  @IsNotEmpty()
  refresh_token!: string;
}
