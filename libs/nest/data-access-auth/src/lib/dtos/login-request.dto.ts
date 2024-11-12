import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ILoginPayload } from '@ph24/shared/domain';

export class LoginRequestDto implements ILoginPayload {
  @ApiProperty({
    type: String,
    example: `john.doe@example.com`,
  })
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'Password1!',
  })
  @IsNotEmpty()
  @IsString()
  password!: string;
}
