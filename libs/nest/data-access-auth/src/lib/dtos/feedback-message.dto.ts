import { ApiProperty } from "@nestjs/swagger";
import { IFeedbackMessage } from "@ph24/shared/domain";
import { IsString } from "class-validator";

export class FeedbackMessageDto implements IFeedbackMessage {
  @ApiProperty({
    type: String,
    example: `Feedback message`,
  })
  @IsString()
  message!: string;
}
