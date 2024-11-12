import { Test } from '@nestjs/testing';
import { NestFeatureAuthController } from './nest-feature-auth.controller';
import { NestFeatureAuthService } from './nest-feature-auth.service';
import { NestFeatureUserModule } from '@ph24/nest/feature-user';
import { JwtModule } from '@nestjs/jwt';

describe('NestFeatureAuthController', () => {
  let controller: NestFeatureAuthController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [NestFeatureUserModule, JwtModule],
      providers: [NestFeatureAuthService],
      controllers: [NestFeatureAuthController],
    }).compile();

    controller = module.get(NestFeatureAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
