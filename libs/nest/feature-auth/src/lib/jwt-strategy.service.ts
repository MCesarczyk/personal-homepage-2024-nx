import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { IAccessTokenPayload } from '@ph24/shared/domain';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env['JWT_SECRET'],
    });
  }

  async validate(
    payload: Pick<IAccessTokenPayload, 'sub'> & Record<string, string | number | boolean | object>
  ) {
    const { sub, ...rest } = payload;
    return { userId: sub, ...rest };
  }
}
