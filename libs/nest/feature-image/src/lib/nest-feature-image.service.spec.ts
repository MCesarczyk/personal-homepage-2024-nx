import { Test } from '@nestjs/testing';
import { NestFeatureImageService } from './nest-feature-image.service';

describe('NestFeatureImageService', () => {
  let service: NestFeatureImageService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [NestFeatureImageService],
    }).compile();

    service = module.get(NestFeatureImageService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
