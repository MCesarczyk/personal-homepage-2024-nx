import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { ITokenResponse } from "@ph24/shared/domain";

export class LoginResponseDto implements ITokenResponse {
  @ApiProperty({
    type: String,
    readOnly: true,
  })
  @IsString()
  access_token!: string;
}
