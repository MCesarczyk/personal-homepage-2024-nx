import { Test } from '@nestjs/testing';
import { NestFeatureSkillService } from './nest-feature-skill.service';

describe('NestFeatureSkillService', () => {
  let service: NestFeatureSkillService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [NestFeatureSkillService],
    }).compile();

    service = module.get(NestFeatureSkillService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
