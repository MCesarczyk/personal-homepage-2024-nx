import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { IRefreshToken, IAccessToken } from "@ph24/shared/domain";

export class LoginResponseDto implements IAccessToken, IRefreshToken {
  @ApiProperty({
    type: String,
    readOnly: true,
  })
  @IsString()
  accessToken!: IAccessToken["accessToken"];
  refreshToken!: IRefreshToken["refreshToken"];
}
