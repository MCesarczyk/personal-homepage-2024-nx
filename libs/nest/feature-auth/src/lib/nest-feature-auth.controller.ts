import { BadRequestException, Body, Controller, Post, Req, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

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
  async login(
    @Res() res: Response,
    @Body() { email, password }: LoginRequestDto): Promise<Response<LoginResponseDto>> {
    const user = await this.nestFeatureAuthService.validateUser(email, password);
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    const { accessToken, refreshToken } = await this.nestFeatureAuthService.loginUser(user);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });

    return res.send({ accessToken, refreshToken });
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

    const { password, refreshToken, ...publicUserData } = user; // eslint-disable-line @typescript-eslint/no-unused-vars

    return publicUserData;
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
    @Body() { refreshToken }: RefreshTokenDto,
  ): Promise<IAccessToken> {
    const { accessToken } = await this.nestFeatureAuthService.refresh(
      refreshToken,
    );

    return { accessToken };
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
