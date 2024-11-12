import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { NestFeatureUserService } from '@ph24/nest/feature-user';
import { User } from '@ph24/nest/data-access-user';
import { IAccessTokenPayload, IPublicUserData, ITokenResponse } from '@ph24/shared/domain';

@Injectable()
export class NestFeatureAuthService {
  private readonly logger = new Logger(NestFeatureAuthService.name);

  constructor(
    @Inject(forwardRef(() => NestFeatureUserService))
    private readonly userService: NestFeatureUserService,
    private jwtService: JwtService,
  ) { }

  async validateUser(email: string, password: string): Promise<IPublicUserData | null> {
    const user = await this.userService.getOneByEmail(email);
    if (!user) {
      return null;
    }

    if (await bcrypt.compare(password, user.password)) {
      this.logger.debug(`User ${email} authenticated successfully`);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...publicUserData } = user;
      return publicUserData;
    }
    return null;
  }

  generateAccessToken(user: User): ITokenResponse {
    const payload: IAccessTokenPayload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
