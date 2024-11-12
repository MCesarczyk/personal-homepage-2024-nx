import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";
import { IUserIdentfyPayload } from "@ph24/shared/domain";

export class UserIdentifyPayloadDto implements IUserIdentfyPayload {
  @ApiProperty({
    type: String,
    example: `john.doe@example.com`,
  })
  @IsEmail()
  @IsNotEmpty()
  email!: string;
}
