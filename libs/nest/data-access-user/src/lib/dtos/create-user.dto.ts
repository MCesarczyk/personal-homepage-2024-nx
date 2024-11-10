import { ApiProperty } from "@nestjs/swagger";
import { IUser } from "@ph24/shared/domain";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto implements Omit<IUser, 'id'> {
  @ApiProperty({
    example: 'user name',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({
    example: 'user email',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  email!: string;

  @ApiProperty({
    example: 'user password',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password!: string;

  @ApiProperty({
    example: 'user occupation',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  occupation!: string;

  @ApiProperty({
    example: 'user introduction',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  introduction!: string;
}
