import { forwardRef, Inject, Injectable, Logger, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { NestFeatureUserService } from '@ph24/nest/feature-user';
import { IAccessTokenPayload, IPublicUserData, IRefreshToken, IAccessToken } from '@ph24/shared/domain';
import { randomUUID } from 'crypto';
import { jwtConstants } from './constants';
import { LoginResponseDto, RefreshTokenDto } from '@ph24/nest/data-access-auth';
import { User, UserResponseDto } from '@ph24/nest/data-access-user';

@Injectable()
export class NestFeatureAuthService {
  private readonly logger = new Logger(NestFeatureAuthService.name);

  constructor(
    @Inject(forwardRef(() => NestFeatureUserService))
    private readonly userService: NestFeatureUserService,
    private jwtService: JwtService,
  ) { }

  async generateAccessToken(user: IPublicUserData): Promise<IAccessToken> {
    const payload: IAccessTokenPayload = { email: user.email, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }

  async generateRefreshToken(userId: string): Promise<IRefreshToken> {
    const tokenId = randomUUID();
    return {
      refresh_token: await this.jwtService.signAsync(
        { id: userId, tokenId },
        { expiresIn: jwtConstants.refreshExpiration },
      ),
    }
  }

  async checkTokenValidity(token: string): Promise<boolean> {
    try {
      await this.jwtService.verifyAsync(token);
      return true;
    } catch (e) {
      return false
    }
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.getOneByEmail(email);
    if (!user) {
      return null;
    }

    if (await bcrypt.compare(password, user.password)) {
      this.logger.debug(`User ${email} authenticated successfully`);

      return user;
    }

    return null;
  }

  async updateUserRefreshToken(userId: string): Promise<RefreshTokenDto> {
    const { refresh_token } = await this.generateRefreshToken(userId);
    await this.userService.updateOne(userId, { refreshToken: refresh_token });
    return { refresh_token };
  }

  async loginUser(user: User): Promise<LoginResponseDto> {
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const { access_token } = await this.generateAccessToken(user);

    if (!user.refreshToken) {
      const { refresh_token } = await this.updateUserRefreshToken(user.id);
      return { access_token, refresh_token };
    }

    const isTokenValid = await this.checkTokenValidity(user.refreshToken);

    if (!isTokenValid) {
      const { refresh_token } = await this.updateUserRefreshToken(user.id);
      return { access_token, refresh_token };
    }

    return { access_token, refresh_token: user.refreshToken };
  }

  async identifyUser(accessToken: string): Promise<User | null> {
    if (!accessToken) {
      throw new UnauthorizedException();
    }

    const { email } = this.jwtService.verify(accessToken);

    const user = await this.userService.getOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }

  async refresh(
    refreshToken: string,
  ): Promise<IAccessToken> {
    const { id } = this.jwtService.verify(refreshToken);

    const user = await this.userService.getOneById(id);

    if (user?.refreshToken !== refreshToken) {
      throw new UnauthorizedException();
    }

    const { access_token } = await this.generateAccessToken(user);

    return { access_token };
  }

  async logout(accessToken: string | undefined): Promise<UserResponseDto | undefined> {
    if (!accessToken) {
      throw new UnauthorizedException();
    }

    const { email } = this.jwtService.verify(accessToken);

    const user = await this.userService.getOneByEmail(email);

    if (!user || !user.refreshToken) {
      throw new UnauthorizedException();
    }

    await this.userService.updateOne(user.id, { refreshToken: null });

    return user;
  }
}
