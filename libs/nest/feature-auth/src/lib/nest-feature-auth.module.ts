import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { NestFeatureAuthController } from './nest-feature-auth.controller';
import { NestFeatureAuthService } from './nest-feature-auth.service';
import { JwtStrategy } from './jwt-strategy.service';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => ({
        secret: config.getOrThrow<string>('JWT_SECRET'),
        signOptions: {
          expiresIn:
            config.get<string>('JWT_ACCESS_TOKEN_EXPIRES_IN') || '600s',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [NestFeatureAuthController],
  providers: [NestFeatureAuthService, JwtStrategy],
  exports: [NestFeatureAuthService],
})
export class NestFeatureAuthModule { }
