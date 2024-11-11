import { Test } from '@nestjs/testing';
import { NestDataAccessImageModule } from '@ph24/nest/data-access-image';
import { NestFeatureImageService } from './nest-feature-image.service';

describe('NestFeatureImageService', () => {
  let service: NestFeatureImageService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [NestDataAccessImageModule],
      providers: [NestFeatureImageService],
    }).compile();

    service = module.get(NestFeatureImageService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
