import { Test } from '@nestjs/testing';
import { BackendFeatureSkillService } from './backend-feature-skill.service';

describe('BackendFeatureSkillService', () => {
  let service: BackendFeatureSkillService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendFeatureSkillService],
    }).compile();

    service = module.get(BackendFeatureSkillService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
