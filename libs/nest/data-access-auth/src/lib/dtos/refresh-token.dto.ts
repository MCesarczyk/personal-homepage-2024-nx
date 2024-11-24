import { ApiProperty } from '@nestjs/swagger';
import { IRefreshTokenResponse } from '@ph24/shared/domain';
import { IsString } from 'class-validator';

export class RefreshTokenDto implements IRefreshTokenResponse {
  @ApiProperty({
    type: String,
    readOnly: true,
  })
  @IsString()
  refresh_token!: string;
}
