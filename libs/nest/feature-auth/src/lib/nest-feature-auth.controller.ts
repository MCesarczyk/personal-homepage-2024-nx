import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { NestFeatureAuthService } from './nest-feature-auth.service';
import { LoginRequestDto, LoginResponseDto } from '@ph24/nest/data-access-auth';

@ApiTags('auth')
@Controller({ version: '1', path: 'auth' })
export class NestFeatureAuthController {
  constructor(private nestFeatureAuthService: NestFeatureAuthService) { }

  @Post('login')
  @ApiOperation({ summary: 'Login' })
  @ApiOkResponse({ type: LoginResponseDto })
  async login(@Body() { email, password }: LoginRequestDto): Promise<LoginResponseDto> {
    const user = await this.nestFeatureAuthService.validateUser(email, password);
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }
    return this.nestFeatureAuthService.generateAccessToken(user);
  }
}
