import { Test } from '@nestjs/testing';
import { NestFeatureAuthService } from './nest-feature-auth.service';
import { NestFeatureUserModule } from '@ph24/nest/feature-user';
import { JwtModule } from '@nestjs/jwt';

describe('NestFeatureAuthService', () => {
  let service: NestFeatureAuthService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [NestFeatureUserModule, JwtModule],
      providers: [NestFeatureAuthService],
    }).compile();

    service = module.get(NestFeatureAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
