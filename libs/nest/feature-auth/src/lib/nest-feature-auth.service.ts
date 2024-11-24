import { forwardRef, Inject, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { NestFeatureUserService } from '@ph24/nest/feature-user';
import { IAccessTokenPayload, IPublicUserData, IRefreshTokenResponse, ITokenResponse } from '@ph24/shared/domain';
import { randomUUID } from 'crypto';
import { jwtConstants } from './constants';
import { LoginResponseDto } from '@ph24/nest/data-access-auth';
import { User } from '@ph24/nest/data-access-user';

@Injectable()
export class NestFeatureAuthService {
  private readonly logger = new Logger(NestFeatureAuthService.name);

  constructor(
    @Inject(forwardRef(() => NestFeatureUserService))
    private readonly userService: NestFeatureUserService,
    private jwtService: JwtService,
  ) { }

  async generateAccessToken(user: IPublicUserData): Promise<ITokenResponse> {
    const payload: IAccessTokenPayload = { email: user.email, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }

  async generateRefreshToken(userId: string): Promise<IRefreshTokenResponse> {
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

  async loginUser(user: User): Promise<LoginResponseDto> {
    if (!user || !user.refreshToken) {
      throw new UnauthorizedException();
    }

    const { access_token } = await this.generateAccessToken(user);
    const isTokenValid = await this.checkTokenValidity(user.refreshToken);

    if (!isTokenValid) {
      const { refresh_token } = await this.generateRefreshToken(user.id);
      await this.userService.updateOne(user.id, { refreshToken: refresh_token });
      return { access_token, refresh_token };
    }

    return { access_token, refresh_token: user.refreshToken };
  }

  async identifyUser(email: string): Promise<IPublicUserData | null> {
    const userData = await this.userService.getOneByEmail(email);

    if (!userData) {
      return null;
    }

    const { password, refreshToken, ...publicUserData } = userData; // eslint-disable-line @typescript-eslint/no-unused-vars

    return publicUserData;
  }

  async refresh(
    refreshToken: string,
  ): Promise<ITokenResponse> {
    const { id } = this.jwtService.verify(refreshToken);

    const user = await this.userService.getOneById(id);

    if (user?.refreshToken !== refreshToken) {
      throw new UnauthorizedException();
    }

    const { access_token } = await this.generateAccessToken(user);

    return { access_token };
  }

  // async logout(accessToken: string | undefined): Promise<UserData | undefined> {
  //   if (!accessToken) {
  //     throw new UnauthorizedException();
  //   }

  //   const { id } = this.jwtService.verify(accessToken);

  //   const user = await this.userService.getUser({ id });

  //   if (!user || !user.refreshToken) {
  //     throw new UnauthorizedException();
  //   }

  //   await this.userService.updateUser({
  //     where: { id: user.id },
  //     data: { refreshToken: null },
  //   });

  //   return user;
  // }
}
