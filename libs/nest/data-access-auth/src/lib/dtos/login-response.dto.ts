import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { IRefreshTokenResponse, ITokenResponse } from "@ph24/shared/domain";

export class LoginResponseDto implements ITokenResponse, IRefreshTokenResponse {
  @ApiProperty({
    type: String,
    readOnly: true,
  })
  @IsString()
  access_token!: ITokenResponse["access_token"];
  refresh_token!: IRefreshTokenResponse["refresh_token"];
}
