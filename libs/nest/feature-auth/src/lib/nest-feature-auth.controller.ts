import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NestFeatureAuthService } from './nest-feature-auth.service';
import { LoginRequestDto, LoginResponseDto, RefreshTokenDto, UserIdentifyPayloadDto } from '@ph24/nest/data-access-auth';
import { UserResponseDto } from '@ph24/nest/data-access-user';
import { SkipAuth } from '@ph24/nest/util';
import { IPublicUserData, ITokenResponse } from '@ph24/shared/domain';

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
  async identify(@Body() { email }: UserIdentifyPayloadDto): Promise<IPublicUserData> {
    const user = await this.nestFeatureAuthService.identifyUser(email);
    if (!user) {
      throw new BadRequestException('Invalid credentials');
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
    @Body() body: RefreshTokenDto,
  ): Promise<ITokenResponse> {
    const { access_token } = await this.nestFeatureAuthService.refresh(
      body.refresh_token,
    );

    return { access_token };
  }

  // @Post('logout')
  // @ApiOperation({ summary: 'Logout' })
  // @ApiResponse({ status: 401, description: 'Unauthorized' })
  // @ApiResponse({
  //   status: HttpStatus.OK,
  //   description: 'Logout',
  //   type: FeedbackMessage,
  // })
  // async logout(
  //   @Req() req: Request,
  //   @Res() res: Response,
  // ): Promise<Response<FeedbackMessage>> {
  //   const accessToken = req.headers['authorization']?.split(' ')[1];

  //   const user = await this.authService.logout(accessToken);

  //   return res.send({
  //     message: `${user?.email} has been logged out successfully`,
  //   });
  // }
}
