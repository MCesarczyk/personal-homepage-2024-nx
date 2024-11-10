import { Test } from '@nestjs/testing';
import { NestFeatureProjectService } from './nest-feature-project.service';

describe('NestFeatureProjectService', () => {
  let service: NestFeatureProjectService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [NestFeatureProjectService],
    }).compile();

    service = module.get(NestFeatureProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
