import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { NestFeatureAuthController } from './nest-feature-auth.controller';
import { NestFeatureAuthService } from './nest-feature-auth.service';
import { JwtStrategy } from './jwt-strategy.service';
import { NestFeatureUserModule } from '@ph24/nest/feature-user';

@Module({
  imports: [
    NestFeatureUserModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env['JWT_SECRET'],
        signOptions: {
          expiresIn:
            process.env['JWT_ACCESS_TOKEN_EXPIRES_IN'] || '600s',
        },
      }),
    }),
  ],
  controllers: [NestFeatureAuthController],
  providers: [NestFeatureAuthService, JwtStrategy],
  exports: [NestFeatureAuthService],
})
export class NestFeatureAuthModule { }
