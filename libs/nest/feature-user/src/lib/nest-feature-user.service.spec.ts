import { Test } from '@nestjs/testing';
import { NestFeatureUserService } from './nest-feature-user.service';

describe('NestFeatureUserService', () => {
  let service: NestFeatureUserService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [NestFeatureUserService],
    }).compile();

    service = module.get(NestFeatureUserService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
