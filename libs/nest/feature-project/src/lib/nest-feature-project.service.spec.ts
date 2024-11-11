import { Test } from '@nestjs/testing';
import { NestFeatureProjectService } from './nest-feature-project.service';
import { NestDataAccessProjectModule } from '@ph24/nest/data-access-project';

describe('NestFeatureProjectService', () => {
  let service: NestFeatureProjectService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [NestDataAccessProjectModule],
      providers: [NestFeatureProjectService],
    }).compile();

    service = module.get(NestFeatureProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
