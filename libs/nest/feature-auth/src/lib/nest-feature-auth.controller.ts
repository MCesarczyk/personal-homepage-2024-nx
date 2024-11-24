import { BadRequestException, Body, Controller, Post, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NestFeatureAuthService } from './nest-feature-auth.service';
import { FeedbackMessageDto, LoginRequestDto, LoginResponseDto, RefreshTokenDto } from '@ph24/nest/data-access-auth';
import { UserResponseDto } from '@ph24/nest/data-access-user';
import { SkipAuth } from '@ph24/nest/util';
import { IPublicUserData, IAccessToken } from '@ph24/shared/domain';

@ApiTags('auth')
@ApiBearerAuth()
@Controller({ version: '1', path: 'auth' })
export class NestFeatureAuthController {
  constructor(private nestFeatureAuthService: NestFeatureAuthService) { }

  @Post('login')
  @SkipAuth()
  @ApiOperation({ summary: 'login user' })
  @ApiOperation({ summary: 'Login' })
  @ApiOkResponse({ type: LoginResponseDto })
  async login(@Body() { email, password }: LoginRequestDto): Promise<LoginResponseDto> {
    const user = await this.nestFeatureAuthService.validateUser(email, password);
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    return await this.nestFeatureAuthService.loginUser(user);
  }

  @Post('identify')
  @ApiOperation({ summary: 'Identify current user' })
  @ApiOkResponse({ type: UserResponseDto })
  async identify(
    @Req() req: Request & { headers: { authorization: string } },
  ): Promise<IPublicUserData> {
    const accessToken = req.headers.authorization?.split(' ')[1];

    const user = await this.nestFeatureAuthService.identifyUser(accessToken);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    return user;
  }

  @Post('refresh')
  @SkipAuth()
  @ApiOperation({ summary: 'Refresh' })
  @ApiOkResponse({
    type: LoginResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  async refresh(
    @Body() { refresh_token }: RefreshTokenDto,
  ): Promise<IAccessToken> {
    const { access_token } = await this.nestFeatureAuthService.refresh(
      refresh_token,
    );

    return { access_token };
  }

  @Post('logout')
  @ApiOperation({ summary: 'Logout' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiOkResponse({
    type: FeedbackMessageDto,
  })
  async logout(
    @Req() req: Request & { headers: { authorization: string } },
  ): Promise<FeedbackMessageDto> {
    const accessToken = req.headers.authorization?.split(' ')[1];

    const user = await this.nestFeatureAuthService.logout(accessToken);

    return { message: `${user?.name} logged out successfully` };
  }
}
